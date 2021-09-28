import { AbstractUseCases } from "./AbstractUseCases";

export class AddQuestion extends AbstractUseCases {

  constructor(QuestionData: AddQuestionType){
    let url = `http://qr.netreviews.eu//apiForm.php/question`
    let method = "POST";
    super(url, method, QuestionData)
  }
}

export type AddQuestionType = {
  idWebsite: string;
  token: string;
  query: string;
  productId: string;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  question: string;
  productPage: string;
};



