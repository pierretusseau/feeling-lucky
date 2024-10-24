type Spec = {
  name: string
  slug: string
}

type Trader = {
  name: string
  type: string
  slug: string
}

type Building = {
  name: string,
  category: string,
  vendors: string[],
  requires?: string,
  ignore?: boolean
}