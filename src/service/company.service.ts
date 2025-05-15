import { company, CompanyDTORes } from "~/constant/company.constant";

export async function fetchCompany(): Promise<CompanyDTORes> {
    return company;
}
