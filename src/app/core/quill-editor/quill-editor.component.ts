import {
  OnInit,
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

import Quill from 'quill';
import Delta from 'quill-delta';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.css'],
})
export class QuillEditorComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {}

  @Input() content: string = ''; // Content to display in the editor
  quill!: Quill;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ['clean'], // remove formatting button
  ];

  ngAfterViewInit() {
    this.initializeQuill();
    this.resizeEditor();
    this.quill.on('text-change', () => {
      this.resizeEditor();
    });
  }

  initializeQuill() {
    this.quill = new Quill('#editor', {
      modules: {
        //toolbar: '#toolbar', // Attach the toolbar to the Quill editor
        toolbar: this.toolbarOptions,
      },
      placeholder: 'Compose an epic...',
      theme: 'snow', // Ensure this matches your CSS import
    });

    // Set initial content if provided

    this.quill.clipboard.dangerouslyPasteHTML(this.content);
  }

  resizeEditor() {
    const editorElement = this.el.nativeElement.querySelector('#editor');
    const contentHeight = editorElement.scrollHeight;
    this.renderer.setStyle(editorElement, 'height', `${contentHeight}px`);
  }
}
