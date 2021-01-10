import * as _ from 'underscore';

export function generateBlob() {
    const percentage1 = _.random(20, 70);
    const percentage2 = _.random(30, 70);
    const percentage3 = _.random(30, 70);
    const percentage4 = _.random(20, 60);
    const percentage11 = 100 - percentage1;
    const percentage21 = 100 - percentage2;
    const percentage31 = 100 - percentage3;
    const percentage41 = 100 - percentage4;

    return `${percentage1}% ${percentage11}% ${percentage21}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage41}% ${percentage31}%`;
}
