export default function Template(template: Function) {
    return (target) => {return target.prototype.render(template())}
}