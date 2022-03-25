import { addClass } from './elementClass';
import { loadJsList, loadModulePacks, topLevelImport } from './CCTools';
const global = window as any;

//游戏引擎适配器
export interface Adapter {
  canvas: HTMLCanvasElement | null;
  container: HTMLDivElement | null;
  frame: Record<string, unknown> | null;
}

export default class CCApplication {
  private _canvas!: HTMLCanvasElement;
  /**
   * gameName 必须要个 public 目录下的名字一致
   */
  constructor(
    private rootId: string,
    public gameName: string,
    public settings: Record<string, any>,
  ) {
    this.settings.server = gameName + '/';
  }

  public startUp() {
    console.log('aa-11111111111', this.settings);
    topLevelImport('cc').then((_engine: unknown) => {
      const cc = this.cc;
      console.log('cc11111', cc);
      // TODO
      // html中有这个一步 return loadSettingsJson(cc); //这一步怎么没链接
      this.initEngineIntercept();
      return this.initGame()
        .then(() => {
          console.log(
            'aa-this.settings.scriptPackages',
            this.settings.scriptPackages,
          );
          if (this.settings.scriptPackages) {
            return loadModulePacks(this.settings.scriptPackages); //[] 3333333333
          }
        })
        .then(() => {
          console.log('aa--settings.jsList', this.settings.jsList);
          return loadJsList(this.settings.jsList); //[]  4444444444444
        })
        .then(() => {
          //5555555555555555555555555
          return this.loadAssetBundle();
          // this.loadAssetBundle();
        })
        .then(() => {
          //777777777777
          this.setGlobalSettings();
          //ammo-instantiated-07963f79.js:1 Uncaught TypeError: Cannot read properties of undefined (reading 'name')
          console.log('aa-cc.gamecc.gamecc.game', cc.game.run);
          // setTimeout(() => {
          //   this.loadAssetBundle();
          // }, 1000);
          return cc.game.run(() => {
            //Wn.btDefaultCollisionConfiguration is not a constructor!!!!!!!!!!!!!!!!!!!!!!\
            return this.onGameStarted();
          });
        });
    });
  }

  private onGameStarted() {
    const cc = this.cc;
    console.log('bbbthis.cc1;', this.cc, this.settings);
    this.setGlobalSettings(true);
    cc.view.enableRetina(true);
    cc.view.resizeWithBrowserSize(true);

    if (cc.sys.isMobile) {
      if (this.settings.orientation === 'landscape') {
        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
      } else if (this.settings.orientation === 'portrait') {
        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
      }

      cc.view.enableAutoFullScreen(false);
    }

    const launchScene = this.settings.launchScene; // load scene

    cc.director.loadScene(launchScene, null, function () {
      cc.view.setDesignResolutionSize(1024, 768, 4);
      console.log('Success to load scene: '.concat(launchScene));
    });
  }

  private initEngineIntercept() {
    const cc = this.cc;
    const onShow = cc.game._onShow;
    const onHide = cc.game._onHide;
    cc.game._onShow = () => {
      console.log('cc game 拦截 onshow');
      if (cc.director.isPaused()) {
        return;
      }

      onShow.call(cc.game);
    };

    cc.game._onHide = () => {
      console.log('cc game 拦截 onhide');
      if (cc.director.isPaused()) {
        return;
      }

      onHide.call(cc.game);
    };
  }

  private initGame() {
    ///222222222
    const cc = this.cc;
    if (this.settings.macros) {
      for (const key in this.settings.macros) {
        cc.macro[key] = this.settings.macros[key];
      }
    }

    const gameOptions = this.getGameOptions();
    return Promise.resolve(cc.game.init(gameOptions));
  }

  /**
   * 游戏引擎启动 适配器
   * @returns
   */
  public getAdapter() {
    const canvas = this.canvas;
    if (!canvas || canvas.tagName !== 'CANVAS') {
      console.error('unknown canvas id:' + this.rootId);
    }

    const { width, height } = canvas,
      container = document.createElement('div');
    if (canvas && canvas.parentNode) {
      canvas.parentNode.insertBefore(container, canvas);
    }

    container.setAttribute('id', 'Cocos3dGameContainer');
    container.appendChild(canvas);
    const frame =
      container.parentNode === document.body
        ? document.documentElement
        : container.parentNode;
    addClass(canvas, 'gameCanvas');
    console.log('classs');
    canvas.setAttribute('width', width + '' || '480');
    canvas.setAttribute('height', height + '' || '320');
    canvas.setAttribute('tabindex', '99');

    return {
      frame,
      canvas,
      container,
    };
  }

  /**
   * 组装游戏启动参数
   * @returns
   */
  public getGameOptions() {
    const cc = this.cc;
    // assetManager
    const assetOptions = {
      bundleVers: this.settings.bundleVers,
      remoteBundles: this.settings.remoteBundles,
      server: this.settings.server,
      subpackages: this.settings.subpackages,
    };
    const options = {
      debugMode: this.settings.debug
        ? cc.debug.DebugMode.INFO
        : cc.debug.DebugMode.ERROR,
      showFPS: !false && this.settings.debug,
      frameRate: 60,
      groupList: this.settings.groupList,
      collisionMatrix: this.settings.collisionMatrix,
      renderPipeline: this.settings.renderPipeline,
      adapter: this.getAdapter(),
      assetOptions: assetOptions,
      customJointTextureLayouts: this.settings.customJointTextureLayouts || [],
      physics: this.settings.physics,
    };

    return options;
  }

  public loadAssetBundle() {
    // 是否包含 resource startscene
    var hasResourcesBundle = this.settings.hasStartSceneBundle;
    var hasStartSceneBundle = this.settings.hasResourcesBundle;

    const BuiltinBundleName = this.cc.AssetManager.BuiltinBundleName,
      MAIN = BuiltinBundleName.MAIN,
      RESOURCES = BuiltinBundleName.RESOURCES,
      START_SCENE = BuiltinBundleName.START_SCENE;
    const bundleRoot: Array<string> = hasResourcesBundle
      ? [RESOURCES, MAIN]
      : [MAIN];

    console.log(
      'aa---数据',
      BuiltinBundleName,
      MAIN,
      RESOURCES,
      START_SCENE,
      bundleRoot,
      hasStartSceneBundle,
    );

    if (hasStartSceneBundle) {
      bundleRoot.push(START_SCENE);
    }

    var _that = this;

    console.log('aabundleRoot1111111', bundleRoot);

    const result = bundleRoot.reduce(function (pre, name) {
      return pre.then(function () {
        //TODO 加一个console.log(.then就执行了)
        console.log(
          bundleRoot,
          'aa----bundleRootbundleRoot222',
          _that.loadBundle(name),
        );
        return _that.loadBundle(name);
      });
    }, Promise.resolve());

    console.log('aa-resultresultresult', result);

    return result;
  }

  /**
   * cc engine load bundle
   * @param name
   * @returns
   */
  public loadBundle(name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cc.assetManager.loadBundle(name, (err: Error, bundle: any) => {
        if (err) {
          return reject(err);
        }

        resolve(bundle);
      });
    });
  }

  /**
   * 设置全局 _CCSettings，cocos启动时会读取 _CCSettings
   * @param clear
   */
  public setGlobalSettings(clear = false) {
    if (clear) {
      global._CCSettings = undefined;
    } else {
      global._CCSettings = this.settings;
    }
  }

  /**
   * 释放当前场景并且暂停cc所有事件和心跳
   */
  public pauseAndRelease() {
    const cc = this.cc;
    if (cc && cc.director.getScene()) {
      const afterDrawPromise = new Promise<void>(
        (resolve) =>
          cc.director.once(cc.Director.EVENT_AFTER_DRAW, resolve) as void,
      );
      afterDrawPromise.then(() => {
        for (const id in cc.game._persistRootNodes) {
          cc.game.removePersistRootNode(cc.game._persistRootNodes[id]);
        }

        cc.director.getScene().destroy();
        cc.Object._deferredDestroy();
        cc.director.reset();
        cc.game.pause();
        cc.director.pause();
      });
    }
  }

  /**
   * 恢复所有事件和心跳，重新加载场景
   */
  public resumeAndRestart() {
    const cc = this.cc;
    if (cc) {
      // this.setGlobalSettings();
      return cc.game._setRenderPipelineNShowSplash().then(() => {
        cc.director.resume();
        cc.game.resume();
        cc.game._safeEmit(cc.Game.EVENT_RESTART);
      });
    }
  }

  public get canvas(): HTMLCanvasElement {
    if (!this._canvas) {
      const canvas = document.getElementById(this.rootId) as HTMLCanvasElement;
      if (!canvas) {
        throw new Error("'unknown canvas id:" + this.rootId);
      }

      this._canvas = canvas;
    }

    return this._canvas;
  }

  public get cc(): any {
    return global.cc;
  }
}

// export const ccApp = new CCApplication('GameCanvas');
