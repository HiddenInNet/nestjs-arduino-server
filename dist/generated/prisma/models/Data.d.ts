import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type DataModel = runtime.Types.Result.DefaultSelection<Prisma.$DataPayload>;
export type AggregateData = {
    _count: DataCountAggregateOutputType | null;
    _avg: DataAvgAggregateOutputType | null;
    _sum: DataSumAggregateOutputType | null;
    _min: DataMinAggregateOutputType | null;
    _max: DataMaxAggregateOutputType | null;
};
export type DataAvgAggregateOutputType = {
    id: number | null;
    temperature: number | null;
    humidity: number | null;
};
export type DataSumAggregateOutputType = {
    id: number | null;
    temperature: number | null;
    humidity: number | null;
};
export type DataMinAggregateOutputType = {
    id: number | null;
    temperature: number | null;
    humidity: number | null;
    createdAt: Date | null;
};
export type DataMaxAggregateOutputType = {
    id: number | null;
    temperature: number | null;
    humidity: number | null;
    createdAt: Date | null;
};
export type DataCountAggregateOutputType = {
    id: number;
    temperature: number;
    humidity: number;
    createdAt: number;
    _all: number;
};
export type DataAvgAggregateInputType = {
    id?: true;
    temperature?: true;
    humidity?: true;
};
export type DataSumAggregateInputType = {
    id?: true;
    temperature?: true;
    humidity?: true;
};
export type DataMinAggregateInputType = {
    id?: true;
    temperature?: true;
    humidity?: true;
    createdAt?: true;
};
export type DataMaxAggregateInputType = {
    id?: true;
    temperature?: true;
    humidity?: true;
    createdAt?: true;
};
export type DataCountAggregateInputType = {
    id?: true;
    temperature?: true;
    humidity?: true;
    createdAt?: true;
    _all?: true;
};
export type DataAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DataWhereInput;
    orderBy?: Prisma.DataOrderByWithRelationInput | Prisma.DataOrderByWithRelationInput[];
    cursor?: Prisma.DataWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DataCountAggregateInputType;
    _avg?: DataAvgAggregateInputType;
    _sum?: DataSumAggregateInputType;
    _min?: DataMinAggregateInputType;
    _max?: DataMaxAggregateInputType;
};
export type GetDataAggregateType<T extends DataAggregateArgs> = {
    [P in keyof T & keyof AggregateData]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateData[P]> : Prisma.GetScalarType<T[P], AggregateData[P]>;
};
export type DataGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DataWhereInput;
    orderBy?: Prisma.DataOrderByWithAggregationInput | Prisma.DataOrderByWithAggregationInput[];
    by: Prisma.DataScalarFieldEnum[] | Prisma.DataScalarFieldEnum;
    having?: Prisma.DataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DataCountAggregateInputType | true;
    _avg?: DataAvgAggregateInputType;
    _sum?: DataSumAggregateInputType;
    _min?: DataMinAggregateInputType;
    _max?: DataMaxAggregateInputType;
};
export type DataGroupByOutputType = {
    id: number;
    temperature: number;
    humidity: number;
    createdAt: Date;
    _count: DataCountAggregateOutputType | null;
    _avg: DataAvgAggregateOutputType | null;
    _sum: DataSumAggregateOutputType | null;
    _min: DataMinAggregateOutputType | null;
    _max: DataMaxAggregateOutputType | null;
};
type GetDataGroupByPayload<T extends DataGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DataGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DataGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DataGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DataGroupByOutputType[P]>;
}>>;
export type DataWhereInput = {
    AND?: Prisma.DataWhereInput | Prisma.DataWhereInput[];
    OR?: Prisma.DataWhereInput[];
    NOT?: Prisma.DataWhereInput | Prisma.DataWhereInput[];
    id?: Prisma.IntFilter<"Data"> | number;
    temperature?: Prisma.FloatFilter<"Data"> | number;
    humidity?: Prisma.FloatFilter<"Data"> | number;
    createdAt?: Prisma.DateTimeFilter<"Data"> | Date | string;
};
export type DataOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    humidity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DataWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DataWhereInput | Prisma.DataWhereInput[];
    OR?: Prisma.DataWhereInput[];
    NOT?: Prisma.DataWhereInput | Prisma.DataWhereInput[];
    temperature?: Prisma.FloatFilter<"Data"> | number;
    humidity?: Prisma.FloatFilter<"Data"> | number;
    createdAt?: Prisma.DateTimeFilter<"Data"> | Date | string;
}, "id">;
export type DataOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    humidity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DataCountOrderByAggregateInput;
    _avg?: Prisma.DataAvgOrderByAggregateInput;
    _max?: Prisma.DataMaxOrderByAggregateInput;
    _min?: Prisma.DataMinOrderByAggregateInput;
    _sum?: Prisma.DataSumOrderByAggregateInput;
};
export type DataScalarWhereWithAggregatesInput = {
    AND?: Prisma.DataScalarWhereWithAggregatesInput | Prisma.DataScalarWhereWithAggregatesInput[];
    OR?: Prisma.DataScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DataScalarWhereWithAggregatesInput | Prisma.DataScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Data"> | number;
    temperature?: Prisma.FloatWithAggregatesFilter<"Data"> | number;
    humidity?: Prisma.FloatWithAggregatesFilter<"Data"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Data"> | Date | string;
};
export type DataCreateInput = {
    temperature: number;
    humidity: number;
    createdAt?: Date | string;
};
export type DataUncheckedCreateInput = {
    id?: number;
    temperature: number;
    humidity: number;
    createdAt?: Date | string;
};
export type DataUpdateInput = {
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    humidity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DataUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    humidity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DataCreateManyInput = {
    id?: number;
    temperature: number;
    humidity: number;
    createdAt?: Date | string;
};
export type DataUpdateManyMutationInput = {
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    humidity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DataUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    humidity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DataCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    humidity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DataAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    humidity?: Prisma.SortOrder;
};
export type DataMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    humidity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DataMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    humidity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DataSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    humidity?: Prisma.SortOrder;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DataSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    temperature?: boolean;
    humidity?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["data"]>;
export type DataSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    temperature?: boolean;
    humidity?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["data"]>;
export type DataSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    temperature?: boolean;
    humidity?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["data"]>;
export type DataSelectScalar = {
    id?: boolean;
    temperature?: boolean;
    humidity?: boolean;
    createdAt?: boolean;
};
export type DataOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "temperature" | "humidity" | "createdAt", ExtArgs["result"]["data"]>;
export type $DataPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Data";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        temperature: number;
        humidity: number;
        createdAt: Date;
    }, ExtArgs["result"]["data"]>;
    composites: {};
};
export type DataGetPayload<S extends boolean | null | undefined | DataDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DataPayload, S>;
export type DataCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DataCountAggregateInputType | true;
};
export interface DataDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Data'];
        meta: {
            name: 'Data';
        };
    };
    findUnique<T extends DataFindUniqueArgs>(args: Prisma.SelectSubset<T, DataFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DataClient<runtime.Types.Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DataFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DataFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DataClient<runtime.Types.Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DataFindFirstArgs>(args?: Prisma.SelectSubset<T, DataFindFirstArgs<ExtArgs>>): Prisma.Prisma__DataClient<runtime.Types.Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DataFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DataFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DataClient<runtime.Types.Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DataFindManyArgs>(args?: Prisma.SelectSubset<T, DataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DataCreateArgs>(args: Prisma.SelectSubset<T, DataCreateArgs<ExtArgs>>): Prisma.Prisma__DataClient<runtime.Types.Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DataCreateManyArgs>(args?: Prisma.SelectSubset<T, DataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DataCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DataDeleteArgs>(args: Prisma.SelectSubset<T, DataDeleteArgs<ExtArgs>>): Prisma.Prisma__DataClient<runtime.Types.Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DataUpdateArgs>(args: Prisma.SelectSubset<T, DataUpdateArgs<ExtArgs>>): Prisma.Prisma__DataClient<runtime.Types.Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DataDeleteManyArgs>(args?: Prisma.SelectSubset<T, DataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DataUpdateManyArgs>(args: Prisma.SelectSubset<T, DataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DataUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DataUpsertArgs>(args: Prisma.SelectSubset<T, DataUpsertArgs<ExtArgs>>): Prisma.Prisma__DataClient<runtime.Types.Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DataCountArgs>(args?: Prisma.Subset<T, DataCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DataCountAggregateOutputType> : number>;
    aggregate<T extends DataAggregateArgs>(args: Prisma.Subset<T, DataAggregateArgs>): Prisma.PrismaPromise<GetDataAggregateType<T>>;
    groupBy<T extends DataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DataGroupByArgs['orderBy'];
    } : {
        orderBy?: DataGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DataFieldRefs;
}
export interface Prisma__DataClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DataFieldRefs {
    readonly id: Prisma.FieldRef<"Data", 'Int'>;
    readonly temperature: Prisma.FieldRef<"Data", 'Float'>;
    readonly humidity: Prisma.FieldRef<"Data", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Data", 'DateTime'>;
}
export type DataFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataSelect<ExtArgs> | null;
    omit?: Prisma.DataOmit<ExtArgs> | null;
    where: Prisma.DataWhereUniqueInput;
};
export type DataFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataSelect<ExtArgs> | null;
    omit?: Prisma.DataOmit<ExtArgs> | null;
    where: Prisma.DataWhereUniqueInput;
};
export type DataFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataSelect<ExtArgs> | null;
    omit?: Prisma.DataOmit<ExtArgs> | null;
    where?: Prisma.DataWhereInput;
    orderBy?: Prisma.DataOrderByWithRelationInput | Prisma.DataOrderByWithRelationInput[];
    cursor?: Prisma.DataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DataScalarFieldEnum | Prisma.DataScalarFieldEnum[];
};
export type DataFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataSelect<ExtArgs> | null;
    omit?: Prisma.DataOmit<ExtArgs> | null;
    where?: Prisma.DataWhereInput;
    orderBy?: Prisma.DataOrderByWithRelationInput | Prisma.DataOrderByWithRelationInput[];
    cursor?: Prisma.DataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DataScalarFieldEnum | Prisma.DataScalarFieldEnum[];
};
export type DataFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataSelect<ExtArgs> | null;
    omit?: Prisma.DataOmit<ExtArgs> | null;
    where?: Prisma.DataWhereInput;
    orderBy?: Prisma.DataOrderByWithRelationInput | Prisma.DataOrderByWithRelationInput[];
    cursor?: Prisma.DataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DataScalarFieldEnum | Prisma.DataScalarFieldEnum[];
};
export type DataCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataSelect<ExtArgs> | null;
    omit?: Prisma.DataOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DataCreateInput, Prisma.DataUncheckedCreateInput>;
};
export type DataCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DataCreateManyInput | Prisma.DataCreateManyInput[];
};
export type DataCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DataOmit<ExtArgs> | null;
    data: Prisma.DataCreateManyInput | Prisma.DataCreateManyInput[];
};
export type DataUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataSelect<ExtArgs> | null;
    omit?: Prisma.DataOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DataUpdateInput, Prisma.DataUncheckedUpdateInput>;
    where: Prisma.DataWhereUniqueInput;
};
export type DataUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DataUpdateManyMutationInput, Prisma.DataUncheckedUpdateManyInput>;
    where?: Prisma.DataWhereInput;
    limit?: number;
};
export type DataUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DataOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DataUpdateManyMutationInput, Prisma.DataUncheckedUpdateManyInput>;
    where?: Prisma.DataWhereInput;
    limit?: number;
};
export type DataUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataSelect<ExtArgs> | null;
    omit?: Prisma.DataOmit<ExtArgs> | null;
    where: Prisma.DataWhereUniqueInput;
    create: Prisma.XOR<Prisma.DataCreateInput, Prisma.DataUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DataUpdateInput, Prisma.DataUncheckedUpdateInput>;
};
export type DataDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataSelect<ExtArgs> | null;
    omit?: Prisma.DataOmit<ExtArgs> | null;
    where: Prisma.DataWhereUniqueInput;
};
export type DataDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DataWhereInput;
    limit?: number;
};
export type DataDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataSelect<ExtArgs> | null;
    omit?: Prisma.DataOmit<ExtArgs> | null;
};
export {};
