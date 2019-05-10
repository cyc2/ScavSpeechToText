import { Component, ViewEncapsulation } from '@angular/core';
/*import {
  ColorGrammar,
} from './sub.component.grammar';*/
import {
  SpeechRecognitionLang,
  SpeechRecognitionMaxAlternatives,
  SpeechRecognitionGrammars,
  SpeechRecognitionService,
} from '../../../../../projects/ngx-speech-recognition/src/public_api';

@Component({
  selector: 'demo-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    // Dependency Inject to SpeechRecognitionService
    // like this.
    //
    // こんな感じで依存解決できます。
    {
      provide: SpeechRecognitionLang,
      useValue: 'en-US',
    },
    {
      provide: SpeechRecognitionMaxAlternatives,
      useValue: 1,
    },
    /*{
      provide: SpeechRecognitionGrammars,
      useValue: ColorGrammar,
    },*/
    SpeechRecognitionService,
  ],
})
export class SubComponent {

  public started = false;
  public message = '';
  public display = '';
  public len = 1;
  public canreset = 0;

  constructor(
    private service: SpeechRecognitionService,
  ) {
    //console.log('SubComponent', this.service);

    this.service.onstart = (e) => {
      //console.log('onstart');
    };
    this.service.onresult = (e) => {
      this.message = '';
      this.len = e.results.length;
      for(let i = 0; i < this.len; i++) {
        this.message += e.results[i].item(0).transcript;
      }
      this.display = this.message.split(' ').join('👏');
      this.canreset = 1;
      //console.log(e.results.length);
      //console.log('SubComponent:onresult', this.message, e);
    };
  }

  start() {
    this.started = true;
    this.service.start();
  }

  stop() {
    this.started = false;
    this.service.stop();
  }

  reset() {
    this.canreset = 0;
    this.len = 1;
    this.message = '';
    this.display = '';
  }
}
