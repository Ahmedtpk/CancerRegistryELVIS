// interfaces.ts

export interface allVariableDataDTO {
    backendSearchTime: string;
    variableList: VariableData[];
}


export interface VariableData {
  id: number;
  version: number;
  informationLevel: {
      id: number;
      name: string;
      nameEn: string;
      shortName: string;
      sortering: number;
  };
  category: {
      id: number;
      name: string;
      nameEn: string;
      description: string | null;
      descriptionEn: string | null;
      sortering: number;
      parent: any; // adjust as per actual structure
  };
  dataType: {
      id: number;
      name: string;
      nameEn: string;
      sortering: number | null;
      description: string;
      descriptionEn: string;
  };
  registrationMethod: {
      id: number;
      name: string;
      nameEn: string;
      mappedName: string;
      description: string;
      descriptionEn: string;
      sortering: number;
  };
  status: {
      id: number;
      name: string;
      nameEn: string;
      description: string | null;
      descriptionEn: string | null;
  };
  techName: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  validFrom: string;
  example: string;
  receivedIn: boolean;
  givenOut: boolean;
  required: boolean;
  createdOn: string;
  createdBy: string;
  updatedOn: string;
  updatedBy: string;
  approvedOn: string;
  approvedBy: string;
  dataSize: number;
  background: string;
  existsInPrimary: boolean;
  existsInRecurrence: boolean;
  validForExtraction: number;
  dataExtractionComment: string;
  descriptionOfQuality: string;
  variableType: {
      id: number;
      name: string;
      nameEn: string;
      description: string;
      descriptionEn: string;
      managed: boolean;
      createdBy: string | null;
      createdOn: string | null;
      updatedBy: string;
      updatedOn: string;
      deletedBy: string | null;
      deletedOn: string | null;
  };
  temporality: {
      id: number;
      name: string;
      nameEn: string;
      description: string | null;
      descriptionEn: string | null;
      managed: boolean;
      createdBy: string | null;
      createdOn: string | null;
      updatedBy: string | null;
      updatedOn: string | null;
      deletedBy: string | null;
      deletedOn: string | null;
  };
  publicVariable: boolean;
}
