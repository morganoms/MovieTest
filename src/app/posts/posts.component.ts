import { Component, OnInit } from '@angular/core';

import { Config } from 'protractor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  movies: Config;
  file = [];
  item = [];
  items = [];
  temp = [];

  constructor(private http: HttpClient) {
    this.http.get('https://api.themoviedb.org/3/list/1?api_key=0289a624c338b19ee60717ae0bc39ab1').toPromise().then(data => {
      console.log(data);

      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.file.push(data[key]);
        }
      }


      
      for(let i = 0; i < this.file[5]; i++){
        this.temp = this.file[4][i];
        this.item = [];  
        for (let key2 in this.temp){
          
          if(this.temp.hasOwnProperty(key2)){
            

            if(key2 == 'poster_path'){
              this.item.push('https://image.tmdb.org/t/p/w500'+String(this.temp[key2]));
            }else{
              this.item.push(this.temp[key2]);
            }
          }
        }
        this.items.push(this.item);
      }
    });
   }

  ngOnInit() {
  }
}
