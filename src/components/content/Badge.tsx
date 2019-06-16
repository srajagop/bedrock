import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface BadgeProps extends BaseProps {
    /**
     * Element styling to be applied.
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

    /**
     * Show the badge as a pill.
     */
    asPill?: boolean;

    /**
     * Show the badge using an ANCHOR tag.
     */
    asLink?: boolean;

    /**
     * Method to call when the badge button is clicked
     */
    onClick?: React.MouseEventHandler<any>;
}

export default class Badge extends React.Component<BadgeProps, any> {

    static defaultProps = {
        variant: 'primary',
        asPill: false,
        asLink: false
    }

    render() {
        let Tag: any = this.props.asLink ? 'a' : 'span';

        const css: string = mergeCSS('badge', {
            'badge-': this.props.variant,
            'badge-pill': this.props.asPill
        }, this.props.className);

        let extra: any = {};
        if (this.props.asLink && this.props.onClick) {
            extra.onClick = this.props.onClick;
        }
        return <Tag className={css} {...extra}>
            {this.props.children}
        </Tag>;
    }

}
