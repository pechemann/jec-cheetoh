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
import { CheetohLoggerProxy } from "../../../../../src/com/onsoft/cheetoh/logging/CheetohLoggerProxy";
import { SingletonError, LoggerProxy } from "jec-commons";

@TestSuite({
  description: "Test the CheetohLoggerProxy class methods"
})
export class CheetohLoggerProxyTest {
  
  @Test({
    description: "should throw a singleton error when calling the constructor function"
  })
  public singletonErrorTest():void {
    const buildInstance:Function = function():void {
      new CheetohLoggerProxy();
    };
    expect(buildInstance).to.throw(SingletonError);
  }
  
  @Test({
    description: "should return a CheetohLoggerProxy instance"
  })
  public getInstanceTest():void {
    const logger:LoggerProxy = CheetohLoggerProxy.getInstance();
    expect(logger).to.be.an.instanceOf(CheetohLoggerProxy);
  }
  
  @Test({
    description: "should return a singleton reference"
  })
  public singletonTest():void {
    const logger1:LoggerProxy = CheetohLoggerProxy.getInstance();
    const logger2:LoggerProxy = CheetohLoggerProxy.getInstance();
    expect(logger1).to.equal(logger2);
  }
}