/// <reference path="./uni.d.ts" />
type OmitCallback<T> = Omit<T, "success" | "failed" | "complete">

type PromiseUni = {
    [k in keyof Uni]: Uni[k] extends (options: infer Op) => infer Re ?
        (Op extends { success?: (result: infer Su) => void, fail?: (result: any) => void } ?
            ((options: OmitCallback<Op>) => Promise<Su>) &
            ((options: Op) => Re) :
            Uni[k]) :
        Uni[k]
}

declare const uni: PromiseUni;
