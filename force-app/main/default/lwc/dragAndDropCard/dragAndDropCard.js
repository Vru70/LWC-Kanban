/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-29-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-29-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class DragAndDropCard extends NavigationMixin(LightningElement) {
    @api stage
    @api record

    get isSameStage() {
        return this.stage === this.record.StageName
    }
    navigateOppHandler(event) {
        event.preventDefault()
        this.navigateHandler(event.target.dataset.id, 'Opportunity')
    }
    navigateAccHandler(event) {
        event.preventDefault()
        this.navigateHandler(event.target.dataset.id, 'Account')
    }
    navigateHandler(Id, apiName) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: Id,
                objectApiName: apiName,
                actionName: 'view',
            },
        });
    }
    itemDragStart() {
        const event = new CustomEvent('itemdrag', {
            detail: this.record.Id
        })
        this.dispatchEvent(event)
    }
}