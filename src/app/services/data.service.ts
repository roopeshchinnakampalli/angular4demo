import { Injectable } from '@angular/core';

@Injectable()
export class MyData {
    getNames() {
        return ["Bill Gates", "Steve Jobs", "Larry Page"];
    }
}