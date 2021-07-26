/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStageInput = {
  id?: string | null,
  name: string,
};

export type ModelStageConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelStageConditionInput | null > | null,
  or?: Array< ModelStageConditionInput | null > | null,
  not?: ModelStageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Stage = {
  __typename: "Stage",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  performances?: ModelPerformanceConnection | null,
};

export type ModelPerformanceConnection = {
  __typename: "ModelPerformanceConnection",
  items?:  Array<Performance | null > | null,
  nextToken?: string | null,
};

export type Performance = {
  __typename: "Performance",
  id: string,
  performanceStageId: string,
  productID?: string | null,
  performer: string,
  imageUrl?: string | null,
  description: string,
  time?: string | null,
  createdAt: string,
  updatedAt: string,
  stage?: Stage | null,
};

export type UpdateStageInput = {
  id: string,
  name?: string | null,
};

export type DeleteStageInput = {
  id: string,
};

export type CreatePerformanceInput = {
  id?: string | null,
  performanceStageId: string,
  productID?: string | null,
  performer: string,
  imageUrl?: string | null,
  description: string,
  time?: string | null,
};

export type ModelPerformanceConditionInput = {
  performanceStageId?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  performer?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  description?: ModelStringInput | null,
  time?: ModelStringInput | null,
  and?: Array< ModelPerformanceConditionInput | null > | null,
  or?: Array< ModelPerformanceConditionInput | null > | null,
  not?: ModelPerformanceConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePerformanceInput = {
  id: string,
  performanceStageId?: string | null,
  productID?: string | null,
  performer?: string | null,
  imageUrl?: string | null,
  description?: string | null,
  time?: string | null,
};

export type DeletePerformanceInput = {
  id: string,
};

export type ModelStageFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelStageFilterInput | null > | null,
  or?: Array< ModelStageFilterInput | null > | null,
  not?: ModelStageFilterInput | null,
};

export type ModelStageConnection = {
  __typename: "ModelStageConnection",
  items?:  Array<Stage | null > | null,
  nextToken?: string | null,
};

export type ModelPerformanceFilterInput = {
  id?: ModelIDInput | null,
  performanceStageId?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  performer?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  description?: ModelStringInput | null,
  time?: ModelStringInput | null,
  and?: Array< ModelPerformanceFilterInput | null > | null,
  or?: Array< ModelPerformanceFilterInput | null > | null,
  not?: ModelPerformanceFilterInput | null,
};

export type CreateStageMutationVariables = {
  input: CreateStageInput,
  condition?: ModelStageConditionInput | null,
};

export type CreateStageMutation = {
  createStage?:  {
    __typename: "Stage",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    performances?:  {
      __typename: "ModelPerformanceConnection",
      items?:  Array< {
        __typename: "Performance",
        id: string,
        performanceStageId: string,
        productID?: string | null,
        performer: string,
        imageUrl?: string | null,
        description: string,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateStageMutationVariables = {
  input: UpdateStageInput,
  condition?: ModelStageConditionInput | null,
};

export type UpdateStageMutation = {
  updateStage?:  {
    __typename: "Stage",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    performances?:  {
      __typename: "ModelPerformanceConnection",
      items?:  Array< {
        __typename: "Performance",
        id: string,
        performanceStageId: string,
        productID?: string | null,
        performer: string,
        imageUrl?: string | null,
        description: string,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteStageMutationVariables = {
  input: DeleteStageInput,
  condition?: ModelStageConditionInput | null,
};

export type DeleteStageMutation = {
  deleteStage?:  {
    __typename: "Stage",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    performances?:  {
      __typename: "ModelPerformanceConnection",
      items?:  Array< {
        __typename: "Performance",
        id: string,
        performanceStageId: string,
        productID?: string | null,
        performer: string,
        imageUrl?: string | null,
        description: string,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePerformanceMutationVariables = {
  input: CreatePerformanceInput,
  condition?: ModelPerformanceConditionInput | null,
};

export type CreatePerformanceMutation = {
  createPerformance?:  {
    __typename: "Performance",
    id: string,
    performanceStageId: string,
    productID?: string | null,
    performer: string,
    imageUrl?: string | null,
    description: string,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    stage?:  {
      __typename: "Stage",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      performances?:  {
        __typename: "ModelPerformanceConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdatePerformanceMutationVariables = {
  input: UpdatePerformanceInput,
  condition?: ModelPerformanceConditionInput | null,
};

export type UpdatePerformanceMutation = {
  updatePerformance?:  {
    __typename: "Performance",
    id: string,
    performanceStageId: string,
    productID?: string | null,
    performer: string,
    imageUrl?: string | null,
    description: string,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    stage?:  {
      __typename: "Stage",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      performances?:  {
        __typename: "ModelPerformanceConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeletePerformanceMutationVariables = {
  input: DeletePerformanceInput,
  condition?: ModelPerformanceConditionInput | null,
};

export type DeletePerformanceMutation = {
  deletePerformance?:  {
    __typename: "Performance",
    id: string,
    performanceStageId: string,
    productID?: string | null,
    performer: string,
    imageUrl?: string | null,
    description: string,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    stage?:  {
      __typename: "Stage",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      performances?:  {
        __typename: "ModelPerformanceConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetStageQueryVariables = {
  id: string,
};

export type GetStageQuery = {
  getStage?:  {
    __typename: "Stage",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    performances?:  {
      __typename: "ModelPerformanceConnection",
      items?:  Array< {
        __typename: "Performance",
        id: string,
        performanceStageId: string,
        productID?: string | null,
        performer: string,
        imageUrl?: string | null,
        description: string,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListStagesQueryVariables = {
  filter?: ModelStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStagesQuery = {
  listStages?:  {
    __typename: "ModelStageConnection",
    items?:  Array< {
      __typename: "Stage",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      performances?:  {
        __typename: "ModelPerformanceConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPerformanceQueryVariables = {
  id: string,
};

export type GetPerformanceQuery = {
  getPerformance?:  {
    __typename: "Performance",
    id: string,
    performanceStageId: string,
    productID?: string | null,
    performer: string,
    imageUrl?: string | null,
    description: string,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    stage?:  {
      __typename: "Stage",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      performances?:  {
        __typename: "ModelPerformanceConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListPerformancesQueryVariables = {
  filter?: ModelPerformanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPerformancesQuery = {
  listPerformances?:  {
    __typename: "ModelPerformanceConnection",
    items?:  Array< {
      __typename: "Performance",
      id: string,
      performanceStageId: string,
      productID?: string | null,
      performer: string,
      imageUrl?: string | null,
      description: string,
      time?: string | null,
      createdAt: string,
      updatedAt: string,
      stage?:  {
        __typename: "Stage",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStageSubscription = {
  onCreateStage?:  {
    __typename: "Stage",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    performances?:  {
      __typename: "ModelPerformanceConnection",
      items?:  Array< {
        __typename: "Performance",
        id: string,
        performanceStageId: string,
        productID?: string | null,
        performer: string,
        imageUrl?: string | null,
        description: string,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateStageSubscription = {
  onUpdateStage?:  {
    __typename: "Stage",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    performances?:  {
      __typename: "ModelPerformanceConnection",
      items?:  Array< {
        __typename: "Performance",
        id: string,
        performanceStageId: string,
        productID?: string | null,
        performer: string,
        imageUrl?: string | null,
        description: string,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteStageSubscription = {
  onDeleteStage?:  {
    __typename: "Stage",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    performances?:  {
      __typename: "ModelPerformanceConnection",
      items?:  Array< {
        __typename: "Performance",
        id: string,
        performanceStageId: string,
        productID?: string | null,
        performer: string,
        imageUrl?: string | null,
        description: string,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePerformanceSubscription = {
  onCreatePerformance?:  {
    __typename: "Performance",
    id: string,
    performanceStageId: string,
    productID?: string | null,
    performer: string,
    imageUrl?: string | null,
    description: string,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    stage?:  {
      __typename: "Stage",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      performances?:  {
        __typename: "ModelPerformanceConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdatePerformanceSubscription = {
  onUpdatePerformance?:  {
    __typename: "Performance",
    id: string,
    performanceStageId: string,
    productID?: string | null,
    performer: string,
    imageUrl?: string | null,
    description: string,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    stage?:  {
      __typename: "Stage",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      performances?:  {
        __typename: "ModelPerformanceConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeletePerformanceSubscription = {
  onDeletePerformance?:  {
    __typename: "Performance",
    id: string,
    performanceStageId: string,
    productID?: string | null,
    performer: string,
    imageUrl?: string | null,
    description: string,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
    stage?:  {
      __typename: "Stage",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      performances?:  {
        __typename: "ModelPerformanceConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};
