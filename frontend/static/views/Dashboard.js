import AbstractView from "./AbstractView";

export default class extends AbstractView
{
  constructor(){
    this.setTitle("DashBoard");
  }

  async getHtml(){
    return ' <h1>Hi Dashboard</h1> ';
    
  }
}