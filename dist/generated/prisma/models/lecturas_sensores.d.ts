import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type lecturas_sensoresModel = runtime.Types.Result.DefaultSelection<Prisma.$lecturas_sensoresPayload>;
export type AggregateLecturas_sensores = {
    _count: Lecturas_sensoresCountAggregateOutputType | null;
    _avg: Lecturas_sensoresAvgAggregateOutputType | null;
    _sum: Lecturas_sensoresSumAggregateOutputType | null;
    _min: Lecturas_sensoresMinAggregateOutputType | null;
    _max: Lecturas_sensoresMaxAggregateOutputType | null;
};
export type Lecturas_sensoresAvgAggregateOutputType = {
    id: number | null;
    temperatura: runtime.Decimal | null;
    humedad: runtime.Decimal | null;
    luz: number | null;
    vibracion: number | null;
    calidad_aire_ppm: runtime.Decimal | null;
};
export type Lecturas_sensoresSumAggregateOutputType = {
    id: number | null;
    temperatura: runtime.Decimal | null;
    humedad: runtime.Decimal | null;
    luz: number | null;
    vibracion: number | null;
    calidad_aire_ppm: runtime.Decimal | null;
};
export type Lecturas_sensoresMinAggregateOutputType = {
    id: number | null;
    fecha: Date | null;
    temperatura: runtime.Decimal | null;
    humedad: runtime.Decimal | null;
    luz: number | null;
    vibracion: number | null;
    calidad_aire_ppm: runtime.Decimal | null;
    alcohol_detectado: boolean | null;
};
export type Lecturas_sensoresMaxAggregateOutputType = {
    id: number | null;
    fecha: Date | null;
    temperatura: runtime.Decimal | null;
    humedad: runtime.Decimal | null;
    luz: number | null;
    vibracion: number | null;
    calidad_aire_ppm: runtime.Decimal | null;
    alcohol_detectado: boolean | null;
};
export type Lecturas_sensoresCountAggregateOutputType = {
    id: number;
    fecha: number;
    temperatura: number;
    humedad: number;
    luz: number;
    vibracion: number;
    calidad_aire_ppm: number;
    alcohol_detectado: number;
    _all: number;
};
export type Lecturas_sensoresAvgAggregateInputType = {
    id?: true;
    temperatura?: true;
    humedad?: true;
    luz?: true;
    vibracion?: true;
    calidad_aire_ppm?: true;
};
export type Lecturas_sensoresSumAggregateInputType = {
    id?: true;
    temperatura?: true;
    humedad?: true;
    luz?: true;
    vibracion?: true;
    calidad_aire_ppm?: true;
};
export type Lecturas_sensoresMinAggregateInputType = {
    id?: true;
    fecha?: true;
    temperatura?: true;
    humedad?: true;
    luz?: true;
    vibracion?: true;
    calidad_aire_ppm?: true;
    alcohol_detectado?: true;
};
export type Lecturas_sensoresMaxAggregateInputType = {
    id?: true;
    fecha?: true;
    temperatura?: true;
    humedad?: true;
    luz?: true;
    vibracion?: true;
    calidad_aire_ppm?: true;
    alcohol_detectado?: true;
};
export type Lecturas_sensoresCountAggregateInputType = {
    id?: true;
    fecha?: true;
    temperatura?: true;
    humedad?: true;
    luz?: true;
    vibracion?: true;
    calidad_aire_ppm?: true;
    alcohol_detectado?: true;
    _all?: true;
};
export type Lecturas_sensoresAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lecturas_sensoresWhereInput;
    orderBy?: Prisma.lecturas_sensoresOrderByWithRelationInput | Prisma.lecturas_sensoresOrderByWithRelationInput[];
    cursor?: Prisma.lecturas_sensoresWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Lecturas_sensoresCountAggregateInputType;
    _avg?: Lecturas_sensoresAvgAggregateInputType;
    _sum?: Lecturas_sensoresSumAggregateInputType;
    _min?: Lecturas_sensoresMinAggregateInputType;
    _max?: Lecturas_sensoresMaxAggregateInputType;
};
export type GetLecturas_sensoresAggregateType<T extends Lecturas_sensoresAggregateArgs> = {
    [P in keyof T & keyof AggregateLecturas_sensores]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLecturas_sensores[P]> : Prisma.GetScalarType<T[P], AggregateLecturas_sensores[P]>;
};
export type lecturas_sensoresGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lecturas_sensoresWhereInput;
    orderBy?: Prisma.lecturas_sensoresOrderByWithAggregationInput | Prisma.lecturas_sensoresOrderByWithAggregationInput[];
    by: Prisma.Lecturas_sensoresScalarFieldEnum[] | Prisma.Lecturas_sensoresScalarFieldEnum;
    having?: Prisma.lecturas_sensoresScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Lecturas_sensoresCountAggregateInputType | true;
    _avg?: Lecturas_sensoresAvgAggregateInputType;
    _sum?: Lecturas_sensoresSumAggregateInputType;
    _min?: Lecturas_sensoresMinAggregateInputType;
    _max?: Lecturas_sensoresMaxAggregateInputType;
};
export type Lecturas_sensoresGroupByOutputType = {
    id: number;
    fecha: Date | null;
    temperatura: runtime.Decimal | null;
    humedad: runtime.Decimal | null;
    luz: number | null;
    vibracion: number | null;
    calidad_aire_ppm: runtime.Decimal | null;
    alcohol_detectado: boolean | null;
    _count: Lecturas_sensoresCountAggregateOutputType | null;
    _avg: Lecturas_sensoresAvgAggregateOutputType | null;
    _sum: Lecturas_sensoresSumAggregateOutputType | null;
    _min: Lecturas_sensoresMinAggregateOutputType | null;
    _max: Lecturas_sensoresMaxAggregateOutputType | null;
};
type GetLecturas_sensoresGroupByPayload<T extends lecturas_sensoresGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Lecturas_sensoresGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Lecturas_sensoresGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Lecturas_sensoresGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Lecturas_sensoresGroupByOutputType[P]>;
}>>;
export type lecturas_sensoresWhereInput = {
    AND?: Prisma.lecturas_sensoresWhereInput | Prisma.lecturas_sensoresWhereInput[];
    OR?: Prisma.lecturas_sensoresWhereInput[];
    NOT?: Prisma.lecturas_sensoresWhereInput | Prisma.lecturas_sensoresWhereInput[];
    id?: Prisma.IntFilter<"lecturas_sensores"> | number;
    fecha?: Prisma.DateTimeNullableFilter<"lecturas_sensores"> | Date | string | null;
    temperatura?: Prisma.DecimalNullableFilter<"lecturas_sensores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad?: Prisma.DecimalNullableFilter<"lecturas_sensores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    luz?: Prisma.IntNullableFilter<"lecturas_sensores"> | number | null;
    vibracion?: Prisma.IntNullableFilter<"lecturas_sensores"> | number | null;
    calidad_aire_ppm?: Prisma.DecimalNullableFilter<"lecturas_sensores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alcohol_detectado?: Prisma.BoolNullableFilter<"lecturas_sensores"> | boolean | null;
};
export type lecturas_sensoresOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrderInput | Prisma.SortOrder;
    temperatura?: Prisma.SortOrderInput | Prisma.SortOrder;
    humedad?: Prisma.SortOrderInput | Prisma.SortOrder;
    luz?: Prisma.SortOrderInput | Prisma.SortOrder;
    vibracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    calidad_aire_ppm?: Prisma.SortOrderInput | Prisma.SortOrder;
    alcohol_detectado?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type lecturas_sensoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.lecturas_sensoresWhereInput | Prisma.lecturas_sensoresWhereInput[];
    OR?: Prisma.lecturas_sensoresWhereInput[];
    NOT?: Prisma.lecturas_sensoresWhereInput | Prisma.lecturas_sensoresWhereInput[];
    fecha?: Prisma.DateTimeNullableFilter<"lecturas_sensores"> | Date | string | null;
    temperatura?: Prisma.DecimalNullableFilter<"lecturas_sensores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad?: Prisma.DecimalNullableFilter<"lecturas_sensores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    luz?: Prisma.IntNullableFilter<"lecturas_sensores"> | number | null;
    vibracion?: Prisma.IntNullableFilter<"lecturas_sensores"> | number | null;
    calidad_aire_ppm?: Prisma.DecimalNullableFilter<"lecturas_sensores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alcohol_detectado?: Prisma.BoolNullableFilter<"lecturas_sensores"> | boolean | null;
}, "id">;
export type lecturas_sensoresOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrderInput | Prisma.SortOrder;
    temperatura?: Prisma.SortOrderInput | Prisma.SortOrder;
    humedad?: Prisma.SortOrderInput | Prisma.SortOrder;
    luz?: Prisma.SortOrderInput | Prisma.SortOrder;
    vibracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    calidad_aire_ppm?: Prisma.SortOrderInput | Prisma.SortOrder;
    alcohol_detectado?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.lecturas_sensoresCountOrderByAggregateInput;
    _avg?: Prisma.lecturas_sensoresAvgOrderByAggregateInput;
    _max?: Prisma.lecturas_sensoresMaxOrderByAggregateInput;
    _min?: Prisma.lecturas_sensoresMinOrderByAggregateInput;
    _sum?: Prisma.lecturas_sensoresSumOrderByAggregateInput;
};
export type lecturas_sensoresScalarWhereWithAggregatesInput = {
    AND?: Prisma.lecturas_sensoresScalarWhereWithAggregatesInput | Prisma.lecturas_sensoresScalarWhereWithAggregatesInput[];
    OR?: Prisma.lecturas_sensoresScalarWhereWithAggregatesInput[];
    NOT?: Prisma.lecturas_sensoresScalarWhereWithAggregatesInput | Prisma.lecturas_sensoresScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"lecturas_sensores"> | number;
    fecha?: Prisma.DateTimeNullableWithAggregatesFilter<"lecturas_sensores"> | Date | string | null;
    temperatura?: Prisma.DecimalNullableWithAggregatesFilter<"lecturas_sensores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad?: Prisma.DecimalNullableWithAggregatesFilter<"lecturas_sensores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    luz?: Prisma.IntNullableWithAggregatesFilter<"lecturas_sensores"> | number | null;
    vibracion?: Prisma.IntNullableWithAggregatesFilter<"lecturas_sensores"> | number | null;
    calidad_aire_ppm?: Prisma.DecimalNullableWithAggregatesFilter<"lecturas_sensores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alcohol_detectado?: Prisma.BoolNullableWithAggregatesFilter<"lecturas_sensores"> | boolean | null;
};
export type lecturas_sensoresCreateInput = {
    fecha?: Date | string | null;
    temperatura?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    luz?: number | null;
    vibracion?: number | null;
    calidad_aire_ppm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alcohol_detectado?: boolean | null;
};
export type lecturas_sensoresUncheckedCreateInput = {
    id?: number;
    fecha?: Date | string | null;
    temperatura?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    luz?: number | null;
    vibracion?: number | null;
    calidad_aire_ppm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alcohol_detectado?: boolean | null;
};
export type lecturas_sensoresUpdateInput = {
    fecha?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    temperatura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    luz?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    vibracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    calidad_aire_ppm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alcohol_detectado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type lecturas_sensoresUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    temperatura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    luz?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    vibracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    calidad_aire_ppm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alcohol_detectado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type lecturas_sensoresCreateManyInput = {
    id?: number;
    fecha?: Date | string | null;
    temperatura?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    luz?: number | null;
    vibracion?: number | null;
    calidad_aire_ppm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alcohol_detectado?: boolean | null;
};
export type lecturas_sensoresUpdateManyMutationInput = {
    fecha?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    temperatura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    luz?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    vibracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    calidad_aire_ppm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alcohol_detectado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type lecturas_sensoresUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    temperatura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    humedad?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    luz?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    vibracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    calidad_aire_ppm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    alcohol_detectado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type lecturas_sensoresCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    temperatura?: Prisma.SortOrder;
    humedad?: Prisma.SortOrder;
    luz?: Prisma.SortOrder;
    vibracion?: Prisma.SortOrder;
    calidad_aire_ppm?: Prisma.SortOrder;
    alcohol_detectado?: Prisma.SortOrder;
};
export type lecturas_sensoresAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    temperatura?: Prisma.SortOrder;
    humedad?: Prisma.SortOrder;
    luz?: Prisma.SortOrder;
    vibracion?: Prisma.SortOrder;
    calidad_aire_ppm?: Prisma.SortOrder;
};
export type lecturas_sensoresMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    temperatura?: Prisma.SortOrder;
    humedad?: Prisma.SortOrder;
    luz?: Prisma.SortOrder;
    vibracion?: Prisma.SortOrder;
    calidad_aire_ppm?: Prisma.SortOrder;
    alcohol_detectado?: Prisma.SortOrder;
};
export type lecturas_sensoresMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    temperatura?: Prisma.SortOrder;
    humedad?: Prisma.SortOrder;
    luz?: Prisma.SortOrder;
    vibracion?: Prisma.SortOrder;
    calidad_aire_ppm?: Prisma.SortOrder;
    alcohol_detectado?: Prisma.SortOrder;
};
export type lecturas_sensoresSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    temperatura?: Prisma.SortOrder;
    humedad?: Prisma.SortOrder;
    luz?: Prisma.SortOrder;
    vibracion?: Prisma.SortOrder;
    calidad_aire_ppm?: Prisma.SortOrder;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type lecturas_sensoresSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    temperatura?: boolean;
    humedad?: boolean;
    luz?: boolean;
    vibracion?: boolean;
    calidad_aire_ppm?: boolean;
    alcohol_detectado?: boolean;
}, ExtArgs["result"]["lecturas_sensores"]>;
export type lecturas_sensoresSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    temperatura?: boolean;
    humedad?: boolean;
    luz?: boolean;
    vibracion?: boolean;
    calidad_aire_ppm?: boolean;
    alcohol_detectado?: boolean;
}, ExtArgs["result"]["lecturas_sensores"]>;
export type lecturas_sensoresSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    temperatura?: boolean;
    humedad?: boolean;
    luz?: boolean;
    vibracion?: boolean;
    calidad_aire_ppm?: boolean;
    alcohol_detectado?: boolean;
}, ExtArgs["result"]["lecturas_sensores"]>;
export type lecturas_sensoresSelectScalar = {
    id?: boolean;
    fecha?: boolean;
    temperatura?: boolean;
    humedad?: boolean;
    luz?: boolean;
    vibracion?: boolean;
    calidad_aire_ppm?: boolean;
    alcohol_detectado?: boolean;
};
export type lecturas_sensoresOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fecha" | "temperatura" | "humedad" | "luz" | "vibracion" | "calidad_aire_ppm" | "alcohol_detectado", ExtArgs["result"]["lecturas_sensores"]>;
export type $lecturas_sensoresPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "lecturas_sensores";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        fecha: Date | null;
        temperatura: runtime.Decimal | null;
        humedad: runtime.Decimal | null;
        luz: number | null;
        vibracion: number | null;
        calidad_aire_ppm: runtime.Decimal | null;
        alcohol_detectado: boolean | null;
    }, ExtArgs["result"]["lecturas_sensores"]>;
    composites: {};
};
export type lecturas_sensoresGetPayload<S extends boolean | null | undefined | lecturas_sensoresDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$lecturas_sensoresPayload, S>;
export type lecturas_sensoresCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<lecturas_sensoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Lecturas_sensoresCountAggregateInputType | true;
};
export interface lecturas_sensoresDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['lecturas_sensores'];
        meta: {
            name: 'lecturas_sensores';
        };
    };
    findUnique<T extends lecturas_sensoresFindUniqueArgs>(args: Prisma.SelectSubset<T, lecturas_sensoresFindUniqueArgs<ExtArgs>>): Prisma.Prisma__lecturas_sensoresClient<runtime.Types.Result.GetResult<Prisma.$lecturas_sensoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends lecturas_sensoresFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, lecturas_sensoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__lecturas_sensoresClient<runtime.Types.Result.GetResult<Prisma.$lecturas_sensoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends lecturas_sensoresFindFirstArgs>(args?: Prisma.SelectSubset<T, lecturas_sensoresFindFirstArgs<ExtArgs>>): Prisma.Prisma__lecturas_sensoresClient<runtime.Types.Result.GetResult<Prisma.$lecturas_sensoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends lecturas_sensoresFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, lecturas_sensoresFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__lecturas_sensoresClient<runtime.Types.Result.GetResult<Prisma.$lecturas_sensoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends lecturas_sensoresFindManyArgs>(args?: Prisma.SelectSubset<T, lecturas_sensoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lecturas_sensoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends lecturas_sensoresCreateArgs>(args: Prisma.SelectSubset<T, lecturas_sensoresCreateArgs<ExtArgs>>): Prisma.Prisma__lecturas_sensoresClient<runtime.Types.Result.GetResult<Prisma.$lecturas_sensoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends lecturas_sensoresCreateManyArgs>(args?: Prisma.SelectSubset<T, lecturas_sensoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends lecturas_sensoresCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, lecturas_sensoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lecturas_sensoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends lecturas_sensoresDeleteArgs>(args: Prisma.SelectSubset<T, lecturas_sensoresDeleteArgs<ExtArgs>>): Prisma.Prisma__lecturas_sensoresClient<runtime.Types.Result.GetResult<Prisma.$lecturas_sensoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends lecturas_sensoresUpdateArgs>(args: Prisma.SelectSubset<T, lecturas_sensoresUpdateArgs<ExtArgs>>): Prisma.Prisma__lecturas_sensoresClient<runtime.Types.Result.GetResult<Prisma.$lecturas_sensoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends lecturas_sensoresDeleteManyArgs>(args?: Prisma.SelectSubset<T, lecturas_sensoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends lecturas_sensoresUpdateManyArgs>(args: Prisma.SelectSubset<T, lecturas_sensoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends lecturas_sensoresUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, lecturas_sensoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lecturas_sensoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends lecturas_sensoresUpsertArgs>(args: Prisma.SelectSubset<T, lecturas_sensoresUpsertArgs<ExtArgs>>): Prisma.Prisma__lecturas_sensoresClient<runtime.Types.Result.GetResult<Prisma.$lecturas_sensoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends lecturas_sensoresCountArgs>(args?: Prisma.Subset<T, lecturas_sensoresCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Lecturas_sensoresCountAggregateOutputType> : number>;
    aggregate<T extends Lecturas_sensoresAggregateArgs>(args: Prisma.Subset<T, Lecturas_sensoresAggregateArgs>): Prisma.PrismaPromise<GetLecturas_sensoresAggregateType<T>>;
    groupBy<T extends lecturas_sensoresGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: lecturas_sensoresGroupByArgs['orderBy'];
    } : {
        orderBy?: lecturas_sensoresGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, lecturas_sensoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturas_sensoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: lecturas_sensoresFieldRefs;
}
export interface Prisma__lecturas_sensoresClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface lecturas_sensoresFieldRefs {
    readonly id: Prisma.FieldRef<"lecturas_sensores", 'Int'>;
    readonly fecha: Prisma.FieldRef<"lecturas_sensores", 'DateTime'>;
    readonly temperatura: Prisma.FieldRef<"lecturas_sensores", 'Decimal'>;
    readonly humedad: Prisma.FieldRef<"lecturas_sensores", 'Decimal'>;
    readonly luz: Prisma.FieldRef<"lecturas_sensores", 'Int'>;
    readonly vibracion: Prisma.FieldRef<"lecturas_sensores", 'Int'>;
    readonly calidad_aire_ppm: Prisma.FieldRef<"lecturas_sensores", 'Decimal'>;
    readonly alcohol_detectado: Prisma.FieldRef<"lecturas_sensores", 'Boolean'>;
}
export type lecturas_sensoresFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturas_sensoresSelect<ExtArgs> | null;
    omit?: Prisma.lecturas_sensoresOmit<ExtArgs> | null;
    where: Prisma.lecturas_sensoresWhereUniqueInput;
};
export type lecturas_sensoresFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturas_sensoresSelect<ExtArgs> | null;
    omit?: Prisma.lecturas_sensoresOmit<ExtArgs> | null;
    where: Prisma.lecturas_sensoresWhereUniqueInput;
};
export type lecturas_sensoresFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturas_sensoresSelect<ExtArgs> | null;
    omit?: Prisma.lecturas_sensoresOmit<ExtArgs> | null;
    where?: Prisma.lecturas_sensoresWhereInput;
    orderBy?: Prisma.lecturas_sensoresOrderByWithRelationInput | Prisma.lecturas_sensoresOrderByWithRelationInput[];
    cursor?: Prisma.lecturas_sensoresWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lecturas_sensoresScalarFieldEnum | Prisma.Lecturas_sensoresScalarFieldEnum[];
};
export type lecturas_sensoresFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturas_sensoresSelect<ExtArgs> | null;
    omit?: Prisma.lecturas_sensoresOmit<ExtArgs> | null;
    where?: Prisma.lecturas_sensoresWhereInput;
    orderBy?: Prisma.lecturas_sensoresOrderByWithRelationInput | Prisma.lecturas_sensoresOrderByWithRelationInput[];
    cursor?: Prisma.lecturas_sensoresWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lecturas_sensoresScalarFieldEnum | Prisma.Lecturas_sensoresScalarFieldEnum[];
};
export type lecturas_sensoresFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturas_sensoresSelect<ExtArgs> | null;
    omit?: Prisma.lecturas_sensoresOmit<ExtArgs> | null;
    where?: Prisma.lecturas_sensoresWhereInput;
    orderBy?: Prisma.lecturas_sensoresOrderByWithRelationInput | Prisma.lecturas_sensoresOrderByWithRelationInput[];
    cursor?: Prisma.lecturas_sensoresWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lecturas_sensoresScalarFieldEnum | Prisma.Lecturas_sensoresScalarFieldEnum[];
};
export type lecturas_sensoresCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturas_sensoresSelect<ExtArgs> | null;
    omit?: Prisma.lecturas_sensoresOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.lecturas_sensoresCreateInput, Prisma.lecturas_sensoresUncheckedCreateInput>;
};
export type lecturas_sensoresCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.lecturas_sensoresCreateManyInput | Prisma.lecturas_sensoresCreateManyInput[];
    skipDuplicates?: boolean;
};
export type lecturas_sensoresCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturas_sensoresSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.lecturas_sensoresOmit<ExtArgs> | null;
    data: Prisma.lecturas_sensoresCreateManyInput | Prisma.lecturas_sensoresCreateManyInput[];
    skipDuplicates?: boolean;
};
export type lecturas_sensoresUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturas_sensoresSelect<ExtArgs> | null;
    omit?: Prisma.lecturas_sensoresOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lecturas_sensoresUpdateInput, Prisma.lecturas_sensoresUncheckedUpdateInput>;
    where: Prisma.lecturas_sensoresWhereUniqueInput;
};
export type lecturas_sensoresUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.lecturas_sensoresUpdateManyMutationInput, Prisma.lecturas_sensoresUncheckedUpdateManyInput>;
    where?: Prisma.lecturas_sensoresWhereInput;
    limit?: number;
};
export type lecturas_sensoresUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturas_sensoresSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.lecturas_sensoresOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lecturas_sensoresUpdateManyMutationInput, Prisma.lecturas_sensoresUncheckedUpdateManyInput>;
    where?: Prisma.lecturas_sensoresWhereInput;
    limit?: number;
};
export type lecturas_sensoresUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturas_sensoresSelect<ExtArgs> | null;
    omit?: Prisma.lecturas_sensoresOmit<ExtArgs> | null;
    where: Prisma.lecturas_sensoresWhereUniqueInput;
    create: Prisma.XOR<Prisma.lecturas_sensoresCreateInput, Prisma.lecturas_sensoresUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.lecturas_sensoresUpdateInput, Prisma.lecturas_sensoresUncheckedUpdateInput>;
};
export type lecturas_sensoresDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturas_sensoresSelect<ExtArgs> | null;
    omit?: Prisma.lecturas_sensoresOmit<ExtArgs> | null;
    where: Prisma.lecturas_sensoresWhereUniqueInput;
};
export type lecturas_sensoresDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lecturas_sensoresWhereInput;
    limit?: number;
};
export type lecturas_sensoresDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lecturas_sensoresSelect<ExtArgs> | null;
    omit?: Prisma.lecturas_sensoresOmit<ExtArgs> | null;
};
export {};
