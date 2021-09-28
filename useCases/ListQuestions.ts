import { AbstractUseCases } from "./AbstractUseCases";

export class ListQuestions extends AbstractUseCases {

  constructor(productId: number){
    let url = `https://cl.avis-verifies.com/medias/components/html/json/2/b/2/2b2217f6-8269-5dd4-456e-9e766a320de3/${productId}.json`;
    let method = "GET";
    let data = {}; 
    super(url, method, data)
  }

}


