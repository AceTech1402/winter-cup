import { CircularProgress } from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridPaginationModel,
  GridRenderCellParams,
  GridRowParams,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import useGetAllGoldenSportsRequests from "../../../hooks/api/useGetAllGoldenSportsRequests";
import useDeleteGoldenSportsRequest from "../../../hooks/api/useDeleteGoldenSportsRequest";
import DeleteModal from "../../../components/deleteModal";

interface RowType {
  goldensports_request__id: string;
  name: string;
  email: string;
  subject: string;
  description: string;
  create_at: string;
}

interface DeleteOptions {
  showConfirmDelete: boolean;
  id: string;
}

const AllGoldenSportsRequestsTable = () => {
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
    await deleteGoldenSportsRequest({ requestId: `${params.id} ` });
    setLoadingList((d) => d.filter((l) => l !== params.id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "subject",
      headerName: "Subject",
      width: 100,
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },
    {
      field: "create_at",
      headerName: "Create at",
      width: 160,
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
    getAllGoldenSportsRequests,
    isLoading: getRequestLoading,
    result,
  } = useGetAllGoldenSportsRequests();

  const {
    error: deleteError,
    deleteGoldenSportsRequest,
    isLoading: deleteLoading,
    result: deleteResult,
  } = useDeleteGoldenSportsRequest();

  useEffect(() => {
    getAllGoldenSportsRequests({
      pagination: {
        no_per_page: paginationModel.pageSize,
        page_no: paginationModel.page + 1,
      },
    });
  }, [deleteResult, paginationModel]);

  const rows = result?.data?.rows?.map((row: RowType) => {
    return {
      ...row,
      id: row.goldensports_request__id,
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

export default AllGoldenSportsRequestsTable;
