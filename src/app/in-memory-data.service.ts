import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes =[
      {id: 11, name: 'KuGa'},
      {id: 12, name: 'AGITΩ'},
      {id: 13, name: 'Ryuki'},
      {id: 14, name: 'Faiz'},
      {id: 15, name: 'Blade'},
      {id: 16, name: 'HiBiKi'},
      {id: 17, name: 'Kabuto'},
      {id: 18, name: 'Den-O'},
      {id: 19, name: 'Kiba'},
      {id: 20, name: 'Decade'}/*
      {id: 11, name: 'シンクロライナー・フュージョン'},
      {id: 12, name: 'マテリアル・バースト'},
      {id: 13, name: 'コキュートス'},
      {id: 14, name: 'へヴィ・メタル・バースト'},
      {id: 15, name: '深淵'},
      {id: 16, name: 'オゾンサークル'},
      {id: 17, name: '霹靂塔'},
      {id: 18, name: 'トゥマーン・ボンバ'},
      {id: 19, name: 'インフェルノ'},
      {id: 20, name: 'バリオン・ランス'}*/
    ];
    return {heroes};
  }
}
