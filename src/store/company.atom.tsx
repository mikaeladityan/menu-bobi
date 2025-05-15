import { atomWithQuery } from "jotai-tanstack-query";
import { fetchCompany } from "~/service/company.service";

export const companyAtom = atomWithQuery(() => ({
    queryKey: ["company"],
    queryFn: fetchCompany,
    staleTime: 60 * 1000,
}));
