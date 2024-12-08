import { defineField, defineType, UserAvatar } from "sanity";
import {UserIcon} from "lucide-react";
export const playlist = defineType({
    name : 'playlist',
    title : 'PlayLists',
    type: 'document',
    
    fields : [
        defineField({
            name : 'slug',
            type : 'slug',
            options: {
                source : 'title'
            }
        }),
        defineField({
            name : 'title',
            type : 'string'
        }),
        defineField({
            name : 'select',
            type : 'array',
            of : [{type : 'reference', to : [{type : "project"}]}]
        }),
       

    ],
   
})