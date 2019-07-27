/**
 * Basic properties every Bedrock component needs
 * to implement. These are the properties all HTML
 * elements possess and are not component specific.
 * 
 */
export interface BaseProps {
    /**
     * Custom CSS classes to be applied to the top-most HTML element
     * emitted out by the component.
     */
    className?: string;

    /**
     * Unique identifier to be added to the top-most HTML element
     * emitted out by the component.
     */
    id?: string;

    /**
     * Data attributes that can be passed to be added to the top-most
     * HTML element emitted out by the component. The attributes are
     * specified as an `object` where the key is prefixed with `data-`
     * keyword and the value is used as is. For example, `{ name : 'bedrock' }` 
     * which will render as `data-name='bedrock'`.
     */
    data?: any;
}

export function getProps(props: any, names: string[]): any {
    const result = {};
    if (!props) {
        return result;
    }
    if (!names || names.length === 0) {
        return result;
    }

    for (let index = 0; index < names.length; index++) {
        let name: string = names[index];
        let prop = props[name];
        if (prop) {
            result[name] = prop;
        }
    }

    return result;
}

/**
 * Convenience function to merge various CSS classname attributes
 * based on the values that are passed as arguments.
 * 
 * @param args 
 */
export function mergeCSS(...args: any[]): string {
    let final: string = '';
    for (let index = 0; index < args.length; index++) {
        let arg = args[index];

        // check if the argument is sane
        if (!arg) {
            continue;
        }

        // string CSS values are added as is
        if (typeof arg === 'string') {
            final += ' ' + arg;
            continue;
        }

        // if the value is an object, check for each key and
        // the boolean value associated with it
        if (typeof arg === 'object') {
            let keys = Object.keys(arg);
            for (let kindex = 0; kindex < keys.length; kindex++) {
                let key = keys[kindex]
                let value = arg[key];

                if (value) {
                    if (typeof value === 'boolean') {
                        final += ' ' + key
                    } else {
                        final += ' ' + key + value;
                    }
                }
            }
        }
    }

    return final;
}

export function invokeFn(fn: Function, thisRef: any = null, args: any = null) {
    if (fn && typeof fn === 'function') {
        fn.apply(thisRef, args);
    }
}

/**
 * List of all coutnries that can be used in a
 * `Select` form element.
 */
export const COUNTRIES = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua & Deps',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Rep',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo {Democratic Rep}',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland {Republic}',
    'Israel',
    'Italy',
    'Ivory Coast',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea North',
    'Korea South',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar, {Burma}',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'St Kitts & Nevis',
    'St Lucia',
    'Saint Vincent & the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome & Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad & Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];
