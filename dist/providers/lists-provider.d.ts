import 'rxjs/Rx';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LocalStorageService } from 'angular-2-local-storage';
import { BaseService } from './my-provider';
import { ListModelGeneral } from '../models/listModelGeneral';
import { ListModelSpecific } from '../models/listModelSpecific';
export declare class ListsService extends BaseService {
    http: Http;
    localStorage: LocalStorageService;
    applicationId: number;
    lists: ListModelGeneral[];
    list: ListModelSpecific[];
    constructor(http: Http, localStorage: LocalStorageService);
    postListBasket(payload: any, task: any): BehaviorSubject<any>;
    postListOrder(payload: any, task: any): BehaviorSubject<any>;
    getLists(applicationId: any, userId: any, storeId: any): BehaviorSubject<any>;
    getList(applicationId: any, userId: any, storeId: any, listId: any): BehaviorSubject<any>;
    postListDelete(payload: any, task: any): BehaviorSubject<any>;
}