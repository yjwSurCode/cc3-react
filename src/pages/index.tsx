import { useRef, useState } from 'react';
import VueGameBridge, { EnumBusEventType } from './VueGameBridge';
import CCApplication from './cc/CCApplication';
import settings from '../../public/web3/src/settings.json';
import { useEffect } from 'react';
export default function IndexPage() {
  let gameApp: CCApplication | undefined;

  useEffect(() => {
    gameApp = new CCApplication('GameCanvas', 'web3', settings);
    gameApp.startUp();

    return () => {};
  }, []);

  const onTestEvent = () => {
    // VueGameBridge.callHandler('vuedivclick');
    // cc.web2cocosSDK.emitGameEvtSize(eventName, params)
  };

  return (
    <div>
      <h1>cocos3 Page index</h1>
      <div className="modalMask">
        <div className="modalContainer">
          <div>渲染器</div>
          <div>
            <canvas id="GameCanvas" tabIndex={0}></canvas>
            <div className="test" onClick={onTestEvent}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
