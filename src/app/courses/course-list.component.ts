import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
    
    courses: Course[] = [];
    
    ngOnInit(): void {
        
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-9867',
                duration: 120,
                rating: 4.4,
                releaseDate: '13/03/2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 69.99,
                code: 'TPS-9867',
                duration: 50,
                rating: 4,
                releaseDate: '11/03/2019'
            }
        ]
    }
}