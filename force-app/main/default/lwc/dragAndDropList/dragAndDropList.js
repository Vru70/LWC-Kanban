/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-29-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-29-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, api } from 'lwc';

export default class DragAndDropList extends LightningElement {
    @api records
    @api stage
    handleItemDrag(evt) {
        const event = new CustomEvent('listitemdrag', {
            detail: evt.detail
        })
        this.dispatchEvent(event)
    }
    handleDragOver(evt) {
        evt.preventDefault()
    }
    handleDrop(evt) {
        const event = new CustomEvent('itemdrop', {
            detail: this.stage
        })
        this.dispatchEvent(event)
    }
}