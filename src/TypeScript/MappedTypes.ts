type TypeK = {
    name: string
    index: number
}

type TypeKOptional<TypeK> = {
    [P in keyof TypeK]?: TypeK[P]
}

const obj: TypeKOptional<TypeK> = {
    name: "sss",
    index: 3
}
