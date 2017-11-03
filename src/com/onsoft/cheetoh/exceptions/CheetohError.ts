//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

/**
 * The <code>CheetohError</code> class represents a core exception thrown by a 
 * Cheetoh implementation.
 */
export class CheetohError extends Error {
  
    ////////////////////////////////////////////////////////////////////////////
    // Constructor function
    ////////////////////////////////////////////////////////////////////////////
  
    /**
     * Creates a new <code>CheetohError</code> instance.
     * 
     * @param {string} message the error message that describes this error.
     */
    constructor(message:string) {
      super(message);
    }
  }
  