import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  posts = [

    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat augue, molestie a viverra id, ' +
        'hendrerit et nibh. Maecenas vitae tincidunt nulla. Integer in nibh sed nunc convallis mattis vitae a mi. ' +
        'Aenean mattis, elit ac condimentum posuere, nisl purus malesuada diam, in viverra elit magna non massa. ' +
        'Mauris ullamcorper tempor massa, eget lobortis eros consequat id. Fusce cursus risus mauris, a vestibulum eros mattis vel.',
      date: new Date()

    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat augue, molestie a viverra id, ' +
        'hendrerit et nibh. Maecenas vitae tincidunt nulla. Integer in nibh sed nunc convallis mattis vitae a mi. ' +
        'Aenean mattis, elit ac condimentum posuere, nisl purus malesuada diam, in viverra elit magna non massa. ' +
        'Mauris ullamcorper tempor massa, eget lobortis eros consequat id. Fusce cursus risus mauris, a vestibulum eros mattis vel.',
      date: new Date()

    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat augue, molestie a viverra id, ' +
        'hendrerit et nibh. Maecenas vitae tincidunt nulla. Integer in nibh sed nunc convallis mattis vitae a mi. ' +
        'Aenean mattis, elit ac condimentum posuere, nisl purus malesuada diam, in viverra elit magna non massa. ' +
        'Mauris ullamcorper tempor massa, eget lobortis eros consequat id. Fusce cursus risus mauris, a vestibulum eros mattis vel.',
      date: new Date()

    },

  ];

  constructor() {

  }

}
