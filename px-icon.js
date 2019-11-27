/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-icon/iron-icon.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style>
      :host {
        /* Create some vars we can manipulate as our icons change*/
        --px-icon-default-width: 22px;
        --px-icon-default-height: 22px;

        /* Update iron-icon vars so we can overwrite */
        --iron-icon-width: var(--px-icon-default-width);
        --iron-icon-height: var(--px-icon-default-height);

        /* Ensures the currentColor is overriden by the stroke color so text
           elements inside the SVG work correctly */
        color: var(--iron-icon-stroke-color, inherit);
        /* Reverses the standard iron-icon colors to have the stroke inherit
           currentcolor and fill default to none */
        fill: var(--iron-icon-fill-color, none);
        stroke: var(--iron-icon-stroke-color, currentColor);
        /* The rest of the properties are copied exactly from iron-icon */
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;
        vertical-align: middle;

        width: var(--iron-icon-width);
        height: var(--iron-icon-height);
        stroke-width: var(--px-icon-stroke-width, 1);
        @apply --iron-icon;
      }
      /* Also copied exactly from iron-icon */
      :host([hidden]) {
        display: none;
      }
      /* Set default sizes for all icons sets */
      :host([icon^='px-utl']),
      :host([icon^='px-doc']) {
        --px-icon-default-width: 16px;
        --px-icon-default-height: 16px;
      }
      :host([icon^='px-obj']),
      :host([icon^='px-fea']),
      :host([icon^='px-com']) {
        --px-icon-default-width: 32px;
        --px-icon-default-height: 32px;
      }
      /* Forces iron-icon to inherit the :host scoped fill/stroke styles */
      iron-icon {
        color: inherit;
        fill: inherit;
        stroke: inherit;
      }
    </style>
    <iron-icon icon="[[icon]]"></iron-icon>
`,

  is:'px-icon',

  properties: {
    icon: {
      type: String,
      reflectToAttribute: true,
      observer: '_updateStylesIndirect'
    }
  },

  _updateStylesIndirect: function() {
    //calling this without argument
    this.updateStyles();
  }
})