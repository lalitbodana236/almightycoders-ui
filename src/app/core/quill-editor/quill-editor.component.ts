import {
  OnInit,
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

import Quill from 'quill';

import hljs from 'highlight.js';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.css'],
})
export class QuillEditorComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {}

  @Input() content: string = ''; // Content to display in the editor
  @Input() isReadOnly: boolean = false; // Determines if the editor is read-only

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
        toolbar: this.isReadOnly ? false : this.toolbarOptions,
        syntax: { hljs },
      },
      readOnly: this.isReadOnly,
      placeholder: 'Compose an epic...',
      theme: 'snow', // Ensure this matches your CSS import
    });

    const Delta = Quill.import('delta');
    this.quill.setContents(
      new Delta()
        .insert('const language = "JavaScript";')
        .insert('\n', { 'code-block': 'javascript' })
        .insert('console.log("I love " + language + "!");')
        .insert('\n', { 'code-block': 'javascript' })
    );

    // Set initial content if provided
    const savedContent = localStorage.getItem('quillContent');
    if (savedContent) {
      this.quill.clipboard.dangerouslyPasteHTML(savedContent);
    } else if (this.content) {
      this.quill.clipboard.dangerouslyPasteHTML(this.content);
    }
  }

  resizeEditor() {
    const editorElement = this.el.nativeElement.querySelector('#editor');
    const contentHeight = editorElement.scrollHeight;
    this.renderer.setStyle(editorElement, 'height', `${contentHeight}px`);
  }

  saveContent() {
    const editorContentHTML = this.quill.root.innerHTML;
    const editorContentText = this.quill.getText();

    console.log('Editor Content as HTML:', editorContentHTML);
    console.log('Editor Content as Plain Text:', editorContentText);

    localStorage.setItem('quillContent', editorContentHTML);
  }
}
