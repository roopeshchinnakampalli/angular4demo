import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {

    private url: string  = "./assets/containerData.json";

    constructor(private http: Http){

    }

    getContainerData() {
        return this.http.get(this.url).map((response: Response) => response.json());
    }

}