const {ccclass} = cc._decorator;
import Model from './Model'
/**
 *viewModel
 *
 * @export
 * @class House
 * @extends {cc.Component}
 */
@ccclass
export default class House extends cc.Component {
    onBeginContact(contact){
        var worldManifold = contact.getWorldManifold();
        var points = worldManifold.points;
        Model.getInstance().score+=0.5;
        this.node.dispatchEvent(
            new cc.Event.EventCustom("scoreUp", true)
        );
        if(points[0].y > cc.winSize.height / 4){
            this.node.dispatchEvent(
                new cc.Event.EventCustom("bottomDown", true)
            );
        }
    }
}