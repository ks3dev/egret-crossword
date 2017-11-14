// TypeScript file

class ScenceBegin extends eui.Component {
    // 单例
    private static shared: ScenceBegin;
    public static Shared() {
        if (ScenceBegin.shared == null) {
            ScenceBegin.shared = new ScenceBegin();
        }
        return ScenceBegin.shared;
    }

    private btn_begin: eui.Button;

    public constructor() {
        super();
        this.skinName = "src/Game/SceneBeginSkin.exml";
        this.addEventListener(eui.UIEvent.COMPLETE,this.UIcomplete,this);

    }
    private UIcomplete(){
        this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onclick_begin, this);

    }
    childrenCreated() {
        super.childrenCreated();

    }

    private onclick_begin() {
        this.parent.addChild(SceneLevels.Shared());
        this.parent.removeChild(this);
    }

}