import { AddQuestion, ListQuestions, AbstractUseCases } from "./";

async function testMethodQuestionsService(service: AbstractUseCases, expectedStatusCode: number, sutName: string): Promise<void> {
  const response = await service.handle()
  console.log(`${sutName} - Should return status ${expectedStatusCode}`, response.status === expectedStatusCode,response.status,  expectedStatusCode, (response.status === expectedStatusCode ? {} : response));
}

async function listQuestionsService(productId: number, expectedStatusCode: number): Promise<void> {
  const service = new ListQuestions(productId);
  const sutName = 'List Questions'  

  testMethodQuestionsService(service, expectedStatusCode, sutName);
}


async function addQuestionService(data: any, expectedStatusCode: number,) {
  const service = await new AddQuestion(data);
  const sutName = 'Add Question'  
  testMethodQuestionsService(service, expectedStatusCode, sutName);
}

// MOCK DATA
const realProductId = 68255
const fakeProductId = 0

const dataToSuccess: any = {
  idWebsite: "2b2217f6-8269-5dd4-456e-9e766a320de3",
  token: "ed87cba87f476a309c67e32daf99c9f0ac7746cd",
  query: "addQuestion",
  firstName: "Pedro",
  lastName: "Augusto",
  email: "marcos.oliveira@incuca.com.br",
  title: "",
  question:
  "Tem algum vídeo interno da bolsa bag? E gostaria de saber qual é maior e cabe mais coisas, a bolsa ou a bolsa bag?",
  productId: "68255",
  productPage:
  "https://www.liderdamatilha.com.br//produto/kit-passeio-pet-impermeavel-bolsa-bag-comedouro-bebedouro-68271",
};


const dataToFail: any = {
  idWebsite: "2b2217f6-8269-5d4-456e-9e766a320de3",
  token: "ed87cba87f476a309c67e32daf99c9f0ac7746cd",
  query: "addQuestion",
  firstName: "Pedro",
  lastName: "Augusto",
  email: "marcos.oliveira@incuca.com.br",
  title: "",
  question:
  "Tem algum vídeo interno da bolsa bag? E gostaria de saber qual é maior e cabe mais coisas, a bolsa ou a bolsa bag?",
  productId: "68255",
  productPage:
  "https://www.liderdamatilha.com.br//produto/kit-passeio-pet-impermeavel-bolsa-bag-comedouro-bebedouro-68271",
};

const REQUEST_STATUS_OK = 200;
const REQUEST_STATUS_FAILED = 403;

// RUN TESTS 
listQuestionsService(realProductId, REQUEST_STATUS_OK);
listQuestionsService(fakeProductId, REQUEST_STATUS_FAILED);
addQuestionService(dataToSuccess, REQUEST_STATUS_OK);
addQuestionService(dataToFail, REQUEST_STATUS_FAILED);