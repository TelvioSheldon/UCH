import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
    id?: string; // will be used in the future to define test-ids
}