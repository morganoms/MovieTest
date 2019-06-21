import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { isEmptyExpression } from '@angular/compiler';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: Object;
  url = "";
  movie = [];
  genero = '';
  temp = [];
  companhias = '';
  paises = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) { 

    this.route.params.subscribe(param => this.id = param.id);
    this.url = "https://api.themoviedb.org/3/movie/"+String(this.id)+"?api_key=0289a624c338b19ee60717ae0bc39ab1&language=en-US";
    console.log(this.url);
    this.http.get(this.url).toPromise().then(data => {

      for(let key in data){
        if(data.hasOwnProperty(key)){
          if(key == 'poster_path'){
            this.movie.push('https://image.tmdb.org/t/p/w500'+String(data[key]));
          }else{
            this.movie.push(data[key]);
          }
  
        }
      }
      this.temp = this.movie[4]

      for (let i = 0; i < this.temp.length; i++) {
        for(let key in this.temp[i]){
          if(this.temp[i].hasOwnProperty(key)){
            if(key == 'name'){
              if(this.genero == ''){
                this.genero = String(this.temp[i][key]);
              }else{
                this.genero = this.genero + ', ' + String(this.temp[i][key]);
              }
              
            }
  
          }
        }
        
      }

      this.temp = this.movie[13]

      for (let i = 0; i < this.temp.length; i++) {
        for(let key in this.temp[i]){
          if(this.temp[i].hasOwnProperty(key)){
            if(key == 'name'){
              if(this.companhias == ''){
                this.companhias = String(this.temp[i][key]);
              }else{
                this.companhias = this.companhias + ', ' + String(this.temp[i][key]);
              }
              
            }
            if(key == 'origin_country'){
              if(this.companhias == ''){
                this.companhias = String(this.temp[i][key]);
              }else{
                this.companhias = this.companhias + ' (' + String(this.temp[i][key]) + ')';
              }
              
            }
  
          }
        }
        
      }

      this.temp = this.movie[14]

      for (let i = 0; i < this.temp.length; i++) {
        for(let key in this.temp[i]){
          if(this.temp[i].hasOwnProperty(key)){
            if(key == 'name'){
              if(this.paises == ''){
                this.paises = String(this.temp[i][key]);
              }else{
                this.paises = this.paises + ', ' + String(this.temp[i][key]);
              }
              
            }
  
          }
        }
        
      }
  

    });



   
    


  }

  ngOnInit() {

  }

}
