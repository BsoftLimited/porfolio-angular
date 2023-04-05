import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: '../view/contact.html',
})
export class Contact{
  cover = 'assets/images/design-community-concept.jpg';
  title = 'Contacts';
  description = 'My Contact Details';
  content = `Feel free to reach out to me for any inquiries or opportunities. You can contact me via email, phone, or LinkedIn.`;  
  phone = '+2347087952034';
  wa = '+2347087952034';
  email = 'okelekelenobel@gmail.com';
}
