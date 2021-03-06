//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
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

import { TestSuite, Test } from "jec-juta";
import { expect } from "chai";
import { CheetohError } from "../../../../../src/com/onsoft/cheetoh/exceptions/CheetohError";

@TestSuite({
  description: "Test the CheetohError class methods"
})
export class CheetohErrorTest {
  
  @Test({
    description: "should extend the Error class"
  })
  public errorInstanceTest():void {
    const error = new CheetohError(null);
    expect(error).to.be.an.instanceOf(Error);
  }
  
  @Test({
    description: "should return the same message as passed to the constructor function"
  })
  public messageTest():void {
    const message:string = "foo bar";
    const error = new CheetohError(message);
    expect(error.message).to.equal(message);
  }
}