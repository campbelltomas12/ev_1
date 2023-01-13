import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RecipesService } from 'src/app/serve/recipes.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {
  clima: any = [];
  fechaCorta: string = new Date().toISOString();
  fecha: string = this.fechaCorta;
  constructor(private ApiService:RecipesService,
    private toastController: ToastController,
    private router : Router) {   this.getclimasantiago();}
  ngOnInit() {
    console.log(this.getclimasantiago)
  }
  getclimasantiago(): void {
    this.ApiService.getclima()
      .then(data => {
      this.clima = data;
      console.log(this.clima);
  });
  }

  async home()
  {
    const toast = await this.toastController.create({
      color : 'danger',
      message : "Volviendo al inicio",
      duration : 2000,
      position : 'top',
      icon: 'exit-outline'
    })
    toast.present()
    this.router.navigate(['/home']);
  }
}
