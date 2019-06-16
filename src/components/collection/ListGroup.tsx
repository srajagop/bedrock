import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface ListGroupProps extends BaseProps {
    /**
     * Set `flush={true}` to remove some borders and rounded corners to 
     * render list group items edge-to-edge in a parent container (e.g., cards).
     */
    flush?: boolean;

    /**
     * Set `horizontal={true}` to change the layout of list group items from 
     * vertical to horizontal across all breakpoints.
     */
    horizontal?: boolean;
}

export default class ListGroup extends React.Component<ListGroupProps, any> {

    static defaultProps = {
        flush: false,
        horizontal: false,
    }

    render() {
        const css: string = mergeCSS('list-group', { 'list-group-flush': this.props.flush, 'list-group-horizontal': this.props.horizontal }, this.props.className);
        return <ul className={css}>
            {this.props.children}
        </ul>;
    }
}
