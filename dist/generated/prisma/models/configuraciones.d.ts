import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type configuracionesModel = runtime.Types.Result.DefaultSelection<Prisma.$configuracionesPayload>;
export type AggregateConfiguraciones = {
    _count: ConfiguracionesCountAggregateOutputType | null;
    _avg: ConfiguracionesAvgAggregateOutputType | null;
    _sum: ConfiguracionesSumAggregateOutputType | null;
    _min: ConfiguracionesMinAggregateOutputType | null;
    _max: ConfiguracionesMaxAggregateOutputType | null;
};
export type ConfiguracionesAvgAggregateOutputType = {
    id: number | null;
    umbral_temperatura: runtime.Decimal | null;
    umbral_humedad: runtime.Decimal | null;
    umbral_luz: number | null;
    umbral_vibracion: number | null;
    umbral_calidad_aire_ppm: runtime.Decimal | null;
};
export type ConfiguracionesSumAggregateOutputType = {
    id: number | null;
    umbral_temperatura: runtime.Decimal | null;
    umbral_humedad: runtime.Decimal | null;
    umbral_luz: number | null;
    umbral_vibracion: number | null;
    umbral_calidad_aire_ppm: runtime.Decimal | null;
};
export type ConfiguracionesMinAggregateOutputType = {
    id: number | null;
    umbral_temperatura: runtime.Decimal | null;
    umbral_humedad: runtime.Decimal | null;
    umbral_luz: number | null;
    umbral_vibracion: number | null;
    umbral_calidad_aire_ppm: runtime.Decimal | null;
    alerta_alcohol: boolean | null;
};
export type ConfiguracionesMaxAggregateOutputType = {
    id: number | null;
    umbral_temperatura: runtime.Decimal | null;
    umbral_humedad: runtime.Decimal | null;
    umbral_luz: number | null;
    umbral_vibracion: number | null;
    umbral_calidad_aire_ppm: runtime.Decimal | null;
    alerta_alcohol: boolean | null;
};
export type ConfiguracionesCountAggregateOutputType = {
    id: number;
    umbral_temperatura: number;
    umbral_humedad: number;
    umbral_luz: number;
    umbral_vibracion: number;
    umbral_calidad_aire_ppm: number;
    alerta_alcohol: number;
    _all: number;
};
export type ConfiguracionesAvgAggregateInputType = {
    id?: true;
    umbral_temperatura?: true;
    umbral_humedad?: true;
    umbral_luz?: true;
    umbral_vibracion?: true;
    umbral_calidad_aire_ppm?: true;
};
export type ConfiguracionesSumAggregateInputType = {
    id?: true;
    umbral_temperatura?: true;
    umbral_humedad?: true;
    umbral_luz?: true;
    umbral_vibracion?: true;
    umbral_calidad_aire_ppm?: true;
};
export type ConfiguracionesMinAggregateInputType = {
    id?: true;
    umbral_temperatura?: true;
    umbral_humedad?: true;
    umbral_luz?: true;
    umbral_vibracion?: true;
    umbral_calidad_aire_ppm?: true;
    alerta_alcohol?: true;
};
export type ConfiguracionesMaxAggregateInputType = {
    id?: true;
    umbral_temperatura?: true;
    umbral_humedad?: true;
    umbral_luz?: true;
    umbral_vibracion?: true;
    umbral_calidad_aire_ppm?: true;
    alerta_alcohol?: true;
};
export type ConfiguracionesCountAggregateInputType = {
    id?: true;
    umbral_temperatura?: true;
    umbral_humedad?: true;
    umbral_luz?: true;
    umbral_vibracion?: true;
    umbral_calidad_aire_ppm?: true;
    alerta_alcohol?: true;
    _all?: true;
};
export type ConfiguracionesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.configuracionesWhereInput;
    orderBy?: Prisma.configuracionesOrderByWithRelationInput | Prisma.configuracionesOrderByWithRelationInput[];
    cursor?: Prisma.configuracionesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConfiguracionesCountAggregateInputType;
    _avg?: ConfiguracionesAvgAggregateInputType;
    _sum?: ConfiguracionesSumAggregateInputType;
    _min?: ConfiguracionesMinAggregateInputType;
    _max?: ConfiguracionesMaxAggregateInputType;
};
export type GetConfiguracionesAggregateType<T extends ConfiguracionesAggregateArgs> = {
    [P in keyof T & keyof AggregateConfiguraciones]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConfiguraciones[P]> : Prisma.GetScalarType<T[P], AggregateConfiguraciones[P]>;
};
export type configuracionesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.configuracionesWhereInput;
    orderBy?: Prisma.configuracionesOrderByWithAggregationInput | Prisma.configuracionesOrderByWithAggregationInput[];
    by: Prisma.ConfiguracionesScalarFieldEnum[] | Prisma.ConfiguracionesScalarFieldEnum;
    having?: Prisma.configuracionesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConfiguracionesCountAggregateInputType | true;
    _avg?: ConfiguracionesAvgAggregateInputType;
    _sum?: ConfiguracionesSumAggregateInputType;
    _min?: ConfiguracionesMinAggregateInputType;
    _max?: ConfiguracionesMaxAggregateInputType;
};
export type ConfiguracionesGroupByOutputType = {
    id: number;
    umbral_temperatura: runtime.Decimal | null;
    umbral_humedad: runtime.Decimal | null;
    umbral_luz: number | null;
    umbral_vibracion: number | null;
    umbral_calidad_aire_ppm: runtime.Decimal | null;
    alerta_alcohol: boolean | null;
    _count: ConfiguracionesCountAggregateOutputType | null;
    _avg: ConfiguracionesAvgAggregateOutputType | null;
    _sum: ConfiguracionesSumAggregateOutputType | null;
    _min: ConfiguracionesMinAggregateOutputType | null;
    _max: ConfiguracionesMaxAggregateOutputType | null;
};
type GetConfiguracionesGroupByPayload<T extends configuracionesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConfiguracionesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConfiguracionesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConfiguracionesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConfiguracionesGroupByOutputType[P]>;
}>>;
export type configuracionesWhereInput = {
    AND?: Prisma.configuracionesWhereInput | Prisma.configuracionesWhereInput[];
    OR?: Prisma.configuracionesWhereInput[];
    NOT?: Prisma.configuracionesWhereInput | Prisma.configuracionesWhereInput[];
    id?: Prisma.IntFilter<"configuraciones"> | number;
    umbral_temperatura?: Prisma.DecimalNullableFilter<"configuraciones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_humedad?: Prisma.DecimalNullableFilter<"configuraciones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_luz?: Prisma.IntNullableFilter<"configuraciones"> | number | null;
    umbral_vibracion?: Prisma.IntNullableFilter<"configuraciones"> | number | null;
    umbral_calidad_aire_ppm?: Prisma.DecimalNullableFilter<"configuraciones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alerta_alcohol?: Prisma.BoolNullableFilter<"configuraciones"> | boolean | null;
};
export type configuracionesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    umbral_temperatura?: Prisma.SortOrderInput | Prisma.SortOrder;
    umbral_humedad?: Prisma.SortOrderInput | Prisma.SortOrder;
    umbral_luz?: Prisma.SortOrderInput | Prisma.SortOrder;
    umbral_vibracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    umbral_calidad_aire_ppm?: Prisma.SortOrderInput | Prisma.SortOrder;
    alerta_alcohol?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type configuracionesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.configuracionesWhereInput | Prisma.configuracionesWhereInput[];
    OR?: Prisma.configuracionesWhereInput[];
    NOT?: Prisma.configuracionesWhereInput | Prisma.configuracionesWhereInput[];
    umbral_temperatura?: Prisma.DecimalNullableFilter<"configuraciones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_humedad?: Prisma.DecimalNullableFilter<"configuraciones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_luz?: Prisma.IntNullableFilter<"configuraciones"> | number | null;
    umbral_vibracion?: Prisma.IntNullableFilter<"configuraciones"> | number | null;
    umbral_calidad_aire_ppm?: Prisma.DecimalNullableFilter<"configuraciones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alerta_alcohol?: Prisma.BoolNullableFilter<"configuraciones"> | boolean | null;
}, "id">;
export type configuracionesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    umbral_temperatura?: Prisma.SortOrderInput | Prisma.SortOrder;
    umbral_humedad?: Prisma.SortOrderInput | Prisma.SortOrder;
    umbral_luz?: Prisma.SortOrderInput | Prisma.SortOrder;
    umbral_vibracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    umbral_calidad_aire_ppm?: Prisma.SortOrderInput | Prisma.SortOrder;
    alerta_alcohol?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.configuracionesCountOrderByAggregateInput;
    _avg?: Prisma.configuracionesAvgOrderByAggregateInput;
    _max?: Prisma.configuracionesMaxOrderByAggregateInput;
    _min?: Prisma.configuracionesMinOrderByAggregateInput;
    _sum?: Prisma.configuracionesSumOrderByAggregateInput;
};
export type configuracionesScalarWhereWithAggregatesInput = {
    AND?: Prisma.configuracionesScalarWhereWithAggregatesInput | Prisma.configuracionesScalarWhereWithAggregatesInput[];
    OR?: Prisma.configuracionesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.configuracionesScalarWhereWithAggregatesInput | Prisma.configuracionesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"configuraciones"> | number;
    umbral_temperatura?: Prisma.DecimalNullableWithAggregatesFilter<"configuraciones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_humedad?: Prisma.DecimalNullableWithAggregatesFilter<"configuraciones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_luz?: Prisma.IntNullableWithAggregatesFilter<"configuraciones"> | number | null;
    umbral_vibracion?: Prisma.IntNullableWithAggregatesFilter<"configuraciones"> | number | null;
    umbral_calidad_aire_ppm?: Prisma.DecimalNullableWithAggregatesFilter<"configuraciones"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alerta_alcohol?: Prisma.BoolNullableWithAggregatesFilter<"configuraciones"> | boolean | null;
};
export type configuracionesCreateInput = {
    umbral_temperatura?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_humedad?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_luz?: number | null;
    umbral_vibracion?: number | null;
    umbral_calidad_aire_ppm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alerta_alcohol?: boolean | null;
};
export type configuracionesUncheckedCreateInput = {
    id?: number;
    umbral_temperatura?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_humedad?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_luz?: number | null;
    umbral_vibracion?: number | null;
    umbral_calidad_aire_ppm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alerta_alcohol?: boolean | null;
};
export type configuracionesUpdateInput = {
    umbral_temperatura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_humedad?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_luz?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    umbral_vibracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    umbral_calidad_aire_ppm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alerta_alcohol?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type configuracionesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    umbral_temperatura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_humedad?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_luz?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    umbral_vibracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    umbral_calidad_aire_ppm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alerta_alcohol?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type configuracionesCreateManyInput = {
    id?: number;
    umbral_temperatura?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_humedad?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_luz?: number | null;
    umbral_vibracion?: number | null;
    umbral_calidad_aire_ppm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alerta_alcohol?: boolean | null;
};
export type configuracionesUpdateManyMutationInput = {
    umbral_temperatura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_humedad?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_luz?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    umbral_vibracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    umbral_calidad_aire_ppm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alerta_alcohol?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type configuracionesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    umbral_temperatura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_humedad?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    umbral_luz?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    umbral_vibracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    umbral_calidad_aire_ppm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alerta_alcohol?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type configuracionesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    umbral_temperatura?: Prisma.SortOrder;
    umbral_humedad?: Prisma.SortOrder;
    umbral_luz?: Prisma.SortOrder;
    umbral_vibracion?: Prisma.SortOrder;
    umbral_calidad_aire_ppm?: Prisma.SortOrder;
    alerta_alcohol?: Prisma.SortOrder;
};
export type configuracionesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    umbral_temperatura?: Prisma.SortOrder;
    umbral_humedad?: Prisma.SortOrder;
    umbral_luz?: Prisma.SortOrder;
    umbral_vibracion?: Prisma.SortOrder;
    umbral_calidad_aire_ppm?: Prisma.SortOrder;
};
export type configuracionesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    umbral_temperatura?: Prisma.SortOrder;
    umbral_humedad?: Prisma.SortOrder;
    umbral_luz?: Prisma.SortOrder;
    umbral_vibracion?: Prisma.SortOrder;
    umbral_calidad_aire_ppm?: Prisma.SortOrder;
    alerta_alcohol?: Prisma.SortOrder;
};
export type configuracionesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    umbral_temperatura?: Prisma.SortOrder;
    umbral_humedad?: Prisma.SortOrder;
    umbral_luz?: Prisma.SortOrder;
    umbral_vibracion?: Prisma.SortOrder;
    umbral_calidad_aire_ppm?: Prisma.SortOrder;
    alerta_alcohol?: Prisma.SortOrder;
};
export type configuracionesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    umbral_temperatura?: Prisma.SortOrder;
    umbral_humedad?: Prisma.SortOrder;
    umbral_luz?: Prisma.SortOrder;
    umbral_vibracion?: Prisma.SortOrder;
    umbral_calidad_aire_ppm?: Prisma.SortOrder;
};
export type configuracionesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    umbral_temperatura?: boolean;
    umbral_humedad?: boolean;
    umbral_luz?: boolean;
    umbral_vibracion?: boolean;
    umbral_calidad_aire_ppm?: boolean;
    alerta_alcohol?: boolean;
}, ExtArgs["result"]["configuraciones"]>;
export type configuracionesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    umbral_temperatura?: boolean;
    umbral_humedad?: boolean;
    umbral_luz?: boolean;
    umbral_vibracion?: boolean;
    umbral_calidad_aire_ppm?: boolean;
    alerta_alcohol?: boolean;
}, ExtArgs["result"]["configuraciones"]>;
export type configuracionesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    umbral_temperatura?: boolean;
    umbral_humedad?: boolean;
    umbral_luz?: boolean;
    umbral_vibracion?: boolean;
    umbral_calidad_aire_ppm?: boolean;
    alerta_alcohol?: boolean;
}, ExtArgs["result"]["configuraciones"]>;
export type configuracionesSelectScalar = {
    id?: boolean;
    umbral_temperatura?: boolean;
    umbral_humedad?: boolean;
    umbral_luz?: boolean;
    umbral_vibracion?: boolean;
    umbral_calidad_aire_ppm?: boolean;
    alerta_alcohol?: boolean;
};
export type configuracionesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "umbral_temperatura" | "umbral_humedad" | "umbral_luz" | "umbral_vibracion" | "umbral_calidad_aire_ppm" | "alerta_alcohol", ExtArgs["result"]["configuraciones"]>;
export type $configuracionesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "configuraciones";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        umbral_temperatura: runtime.Decimal | null;
        umbral_humedad: runtime.Decimal | null;
        umbral_luz: number | null;
        umbral_vibracion: number | null;
        umbral_calidad_aire_ppm: runtime.Decimal | null;
        alerta_alcohol: boolean | null;
    }, ExtArgs["result"]["configuraciones"]>;
    composites: {};
};
export type configuracionesGetPayload<S extends boolean | null | undefined | configuracionesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$configuracionesPayload, S>;
export type configuracionesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<configuracionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConfiguracionesCountAggregateInputType | true;
};
export interface configuracionesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['configuraciones'];
        meta: {
            name: 'configuraciones';
        };
    };
    findUnique<T extends configuracionesFindUniqueArgs>(args: Prisma.SelectSubset<T, configuracionesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__configuracionesClient<runtime.Types.Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends configuracionesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, configuracionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__configuracionesClient<runtime.Types.Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends configuracionesFindFirstArgs>(args?: Prisma.SelectSubset<T, configuracionesFindFirstArgs<ExtArgs>>): Prisma.Prisma__configuracionesClient<runtime.Types.Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends configuracionesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, configuracionesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__configuracionesClient<runtime.Types.Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends configuracionesFindManyArgs>(args?: Prisma.SelectSubset<T, configuracionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends configuracionesCreateArgs>(args: Prisma.SelectSubset<T, configuracionesCreateArgs<ExtArgs>>): Prisma.Prisma__configuracionesClient<runtime.Types.Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends configuracionesCreateManyArgs>(args?: Prisma.SelectSubset<T, configuracionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends configuracionesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, configuracionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends configuracionesDeleteArgs>(args: Prisma.SelectSubset<T, configuracionesDeleteArgs<ExtArgs>>): Prisma.Prisma__configuracionesClient<runtime.Types.Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends configuracionesUpdateArgs>(args: Prisma.SelectSubset<T, configuracionesUpdateArgs<ExtArgs>>): Prisma.Prisma__configuracionesClient<runtime.Types.Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends configuracionesDeleteManyArgs>(args?: Prisma.SelectSubset<T, configuracionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends configuracionesUpdateManyArgs>(args: Prisma.SelectSubset<T, configuracionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends configuracionesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, configuracionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends configuracionesUpsertArgs>(args: Prisma.SelectSubset<T, configuracionesUpsertArgs<ExtArgs>>): Prisma.Prisma__configuracionesClient<runtime.Types.Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends configuracionesCountArgs>(args?: Prisma.Subset<T, configuracionesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConfiguracionesCountAggregateOutputType> : number>;
    aggregate<T extends ConfiguracionesAggregateArgs>(args: Prisma.Subset<T, ConfiguracionesAggregateArgs>): Prisma.PrismaPromise<GetConfiguracionesAggregateType<T>>;
    groupBy<T extends configuracionesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: configuracionesGroupByArgs['orderBy'];
    } : {
        orderBy?: configuracionesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, configuracionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: configuracionesFieldRefs;
}
export interface Prisma__configuracionesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface configuracionesFieldRefs {
    readonly id: Prisma.FieldRef<"configuraciones", 'Int'>;
    readonly umbral_temperatura: Prisma.FieldRef<"configuraciones", 'Decimal'>;
    readonly umbral_humedad: Prisma.FieldRef<"configuraciones", 'Decimal'>;
    readonly umbral_luz: Prisma.FieldRef<"configuraciones", 'Int'>;
    readonly umbral_vibracion: Prisma.FieldRef<"configuraciones", 'Int'>;
    readonly umbral_calidad_aire_ppm: Prisma.FieldRef<"configuraciones", 'Decimal'>;
    readonly alerta_alcohol: Prisma.FieldRef<"configuraciones", 'Boolean'>;
}
export type configuracionesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracionesSelect<ExtArgs> | null;
    omit?: Prisma.configuracionesOmit<ExtArgs> | null;
    where: Prisma.configuracionesWhereUniqueInput;
};
export type configuracionesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracionesSelect<ExtArgs> | null;
    omit?: Prisma.configuracionesOmit<ExtArgs> | null;
    where: Prisma.configuracionesWhereUniqueInput;
};
export type configuracionesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracionesSelect<ExtArgs> | null;
    omit?: Prisma.configuracionesOmit<ExtArgs> | null;
    where?: Prisma.configuracionesWhereInput;
    orderBy?: Prisma.configuracionesOrderByWithRelationInput | Prisma.configuracionesOrderByWithRelationInput[];
    cursor?: Prisma.configuracionesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConfiguracionesScalarFieldEnum | Prisma.ConfiguracionesScalarFieldEnum[];
};
export type configuracionesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracionesSelect<ExtArgs> | null;
    omit?: Prisma.configuracionesOmit<ExtArgs> | null;
    where?: Prisma.configuracionesWhereInput;
    orderBy?: Prisma.configuracionesOrderByWithRelationInput | Prisma.configuracionesOrderByWithRelationInput[];
    cursor?: Prisma.configuracionesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConfiguracionesScalarFieldEnum | Prisma.ConfiguracionesScalarFieldEnum[];
};
export type configuracionesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracionesSelect<ExtArgs> | null;
    omit?: Prisma.configuracionesOmit<ExtArgs> | null;
    where?: Prisma.configuracionesWhereInput;
    orderBy?: Prisma.configuracionesOrderByWithRelationInput | Prisma.configuracionesOrderByWithRelationInput[];
    cursor?: Prisma.configuracionesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConfiguracionesScalarFieldEnum | Prisma.ConfiguracionesScalarFieldEnum[];
};
export type configuracionesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracionesSelect<ExtArgs> | null;
    omit?: Prisma.configuracionesOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.configuracionesCreateInput, Prisma.configuracionesUncheckedCreateInput>;
};
export type configuracionesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.configuracionesCreateManyInput | Prisma.configuracionesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type configuracionesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracionesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.configuracionesOmit<ExtArgs> | null;
    data: Prisma.configuracionesCreateManyInput | Prisma.configuracionesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type configuracionesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracionesSelect<ExtArgs> | null;
    omit?: Prisma.configuracionesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.configuracionesUpdateInput, Prisma.configuracionesUncheckedUpdateInput>;
    where: Prisma.configuracionesWhereUniqueInput;
};
export type configuracionesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.configuracionesUpdateManyMutationInput, Prisma.configuracionesUncheckedUpdateManyInput>;
    where?: Prisma.configuracionesWhereInput;
    limit?: number;
};
export type configuracionesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracionesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.configuracionesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.configuracionesUpdateManyMutationInput, Prisma.configuracionesUncheckedUpdateManyInput>;
    where?: Prisma.configuracionesWhereInput;
    limit?: number;
};
export type configuracionesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracionesSelect<ExtArgs> | null;
    omit?: Prisma.configuracionesOmit<ExtArgs> | null;
    where: Prisma.configuracionesWhereUniqueInput;
    create: Prisma.XOR<Prisma.configuracionesCreateInput, Prisma.configuracionesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.configuracionesUpdateInput, Prisma.configuracionesUncheckedUpdateInput>;
};
export type configuracionesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracionesSelect<ExtArgs> | null;
    omit?: Prisma.configuracionesOmit<ExtArgs> | null;
    where: Prisma.configuracionesWhereUniqueInput;
};
export type configuracionesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.configuracionesWhereInput;
    limit?: number;
};
export type configuracionesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracionesSelect<ExtArgs> | null;
    omit?: Prisma.configuracionesOmit<ExtArgs> | null;
};
export {};
