import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {
  title = 'DragAndDrop';
  formsData:any;

  items: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchItems(); // Fetch items when component initializes
  }

  fetchItems(): void {
    this.dataService.getItems().subscribe(
      (data: any[]) => {
        this.items = data; // Assign fetched items to the component's items array
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }

  drop(event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  // forms demo

  selectedName: string = '';

  user = {
    name: '',
    email: ''
  };

  names: string[] = ['John', 'Jane', 'Alice', 'Bob']; // Example dropdown options.......

  onSubmit(): void {
    // console.log('Form submitted:', this.user);
    // Handle form submission (e.g., send data to server)
    this.user.name=this.selectedName
    console.log('Form submitted:', this.user);
    this.formsData=this.user;
    // this.selectedName='';
    // this.user.email='';
  }



}
