import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: '../view/about.html',
})
export class About{
  cover = 'assets/images/market-launch-concept.jpg';
  title = 'About';
  description = 'Okelekele Nobel';
  content = `Reliable Electronics Technician proficient in product fabrication, soldering and installation of electrical equipment. Adept with coordinating with supervisors to provide engineering solutions. Eager to leverage 5 years' experience in new position. I am also highly skilled software development professional bringing enormous talents for software design, development and integration. Offering advanced knowledge of in-demand programming languages. Background writing code and developing  applications as a freelancer.`;  
  cover1 = 'assets/images/creativity-concept.jpg';
  sclist = 'Download Source Code.';
  sc1 = 'Github →';
  sc1url = 'https://github.com/BsoftLimited/first';
}
