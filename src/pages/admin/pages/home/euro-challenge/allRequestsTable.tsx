import { CircularProgress } from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridPaginationModel,
  GridRenderCellParams,
  GridRowParams,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import useGetAllEuroChallengeRequests from "../../../hooks/api/useGetAllEuroChallengeRequests";
import useDeleteEuroChallengeRequest from "../../../hooks/api/useDeleteEuroChallengeRequest";
import DeleteModal from "../../../components/deleteModal";

interface RowType {
  address: string;
  city: string;
  create_at: string;
  email: string;
  f_name: string;
  l_name: string;
  mobile: string;
  eurochallenge_request__id: string;
  team_name: string;
  zip_code: string;
}

interface DeleteOptions {
  showConfirmDelete: boolean;
  id: string;
}

const AllEuroChallengeRequestsTable = () => {
  const [loadingList, setLoadingList] = useState<(string | number)[]>([]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 5,
  });

  const [deleteOptions, setDeleteOptions] = useState<DeleteOptions>({
    showConfirmDelete: false,
    id: "",
  });

  const showDeleteModal = (params: GridRowParams) => {
    setDeleteOptions({
      id: `${params.id}`,
      showConfirmDelete: true,
    });
  };

  const deleteRequestAction = async (params: DeleteOptions) => {
    setLoadingList((d) => [...d, params.id]);
    await deleteEuroChallengeRequest({ requestId: `${params.id} ` });
    setLoadingList((d) => d.filter((l) => l !== params.id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "f_name",
      headerName: "First Name",
      width: 160,
    },
    {
      field: "l_name",
      headerName: "Last Name",
      width: 160,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      width: 160,
    },
    { field: "city", headerName: "City", width: 160 },
    { field: "address", headerName: "Address", width: 200 },
    {
      field: "create_at",
      headerName: "Create at",
      width: 160,
    },
    {
      field: "team_name",
      headerName: "Team Name",
      width: 160,
    },
    {
      field: "zip_code",
      headerName: "Zip Code",
      width: 100,
    },
    {
      field: "actions",
      type: "actions",
      width: 200,
      getActions: (params: GridRowParams) => [
        <button
          disabled={deleteLoading && loadingList.includes(params.id)}
          onClick={() => showDeleteModal(params)}
          className="border-2 w-full min-w-[80px] px-2 py-2 rounded-md border-red"
        >
          {deleteLoading && loadingList.includes(params.id) ? (
            <CircularProgress
              sx={{ width: "15px !important", height: "15px !important" }}
            />
          ) : (
            "Delete Request"
          )}
        </button>,
      ],
    },
  ];
  const {
    error: getRequestError,
    getAllEuroChallengeRequests,
    isLoading: getRequestLoading,
    result,
  } = useGetAllEuroChallengeRequests();

  const {
    error: deleteError,
    deleteEuroChallengeRequest,
    isLoading: deleteLoading,
    result: deleteResult,
  } = useDeleteEuroChallengeRequest();

  useEffect(() => {
    getAllEuroChallengeRequests({
      pagination: {
        no_per_page: paginationModel.pageSize,
        page_no: paginationModel.page + 1,
      },
    });
  }, [deleteResult, paginationModel]);

  const rows = result?.data?.rows?.map((row: RowType) => {
    return {
      ...row,
      id: row.eurochallenge_request__id,
    };
  });

  return (
    <>
      <div className="overflow-auto h-full w-full">
        <DataGrid
          rows={rows || []}
          columns={columns}
          loading={getRequestLoading}
          autoHeight
          paginationMode="server"
          paginationModel={paginationModel}
          rowCount={result?.data?.total_rows}
          pageSizeOptions={[5, 10, 15, 20]}
          onPaginationModelChange={setPaginationModel}
          // hideFooterPagination
        />
      </div>
      <DeleteModal
        isOpen={deleteOptions.showConfirmDelete}
        setDeleteOptions={setDeleteOptions}
        onConfirm={() => deleteRequestAction(deleteOptions)}
      ></DeleteModal>
    </>
  );
};

export default AllEuroChallengeRequestsTable;
