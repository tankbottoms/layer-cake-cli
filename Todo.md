# Todo

### Doppleganger

#### Overview 

The idea is that we have a particular population which we want to have a duplicate NFT generated without the t-shirt. 
In exchange of the t-shirt the Ape would have Chest, Nipples and medallion. As the population descriptor below states,  there is a new population 'stolen-t-shirts' which is duplicating 't-shirts'.

Additionally, there are layers that are to be replaced with a layered_assets folder 'stolen-t-shirts' and those layers are to be exchanged with the attribute / folder such as T-shirt_color with Chest.

We will retain the same naming of the files from the tranposed folders but also include the keyword - 'medallion' which if present, is effectively requiring that the t-shirts folder image that is built,  requires a new folder outside of the traditional image types, to generate the icon, original, and metadata.  Since the generated assets will not be needed for the population, collages, or metadata but those 
assets will be needed as this collection will be part of a different - NFT collection.

```typescript
export const population_tshirts_naked = [                
    {
      name: 't-shirts',
      layer_order: [
        'Background', 
        'T-shirt_color', 
        'T-shirt_pattern', 
        'Fur', 
        'Ears', 
        'Face', 
        'Ape'
        ],
      population_size: 1250,
    },
    {
      name: 'stolen-t-shirts',
      duplicate: 't-shirts',      
      replace: [{        
        'T-shirt_color': 'Chest';        
        'T-shirt_pattern': 'Necklace';
      }],
      keyword: 'medallion',
      add: {
        after: 'Chest',
        layer_order: [ 
          'Nipples' 
          ]
        },
    },    
];
```