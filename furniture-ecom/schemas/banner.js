export default {

    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options:{
                hotspot: true,
            },
        }, {
            name: 'buttonText',
            title : 'Button Text',
            type: 'string'
        }, {
            name: 'product',
            title: 'Product',
            type:'string'
        }
    ]
}