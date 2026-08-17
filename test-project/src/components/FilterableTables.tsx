import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";

interface DataItem {
  id: number;
  name: string;
  age: number;
  city: string;
}

const mockData: DataItem[] = [
  { id: 1, name: "Alice", age: 25, city: "New York" },
  { id: 2, name: "Bob", age: 30, city: "San Francisco" },
  { id: 3, name: "Charlie", age: 22, city: "Los Angeles" },
];

const FilterableTable: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<keyof DataItem | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [previewData, setPreviewData] = useState<DataItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const filteredData = mockData.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    return sortOrder === "asc"
      ? a[sortColumn] > b[sortColumn]
        ? 1
        : -1
      : a[sortColumn] < b[sortColumn]
      ? 1
      : -1;
  });

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {Object.keys(mockData[0]).map((key) => (
              <th
                key={key}
                className="p-2 border cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setSortColumn(key as keyof DataItem);
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                }}
              >
                {key.toUpperCase()} {sortColumn === key ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              <td
                className="p-2 border cursor-pointer text-blue-500"
                onClick={() => setPreviewData(row)}
              >
                {row.name}
              </td>
              <td className="p-2 border">{row.age}</td>
              <td className="p-2 border">{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {previewData && (
        <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg border rounded-lg w-64">
          <p><strong>Name:</strong> {previewData.name}</p>
          <p><strong>Age:</strong> {previewData.age}</p>
          <p><strong>City:</strong> {previewData.city}</p>
          <button
            className="text-blue-500 mt-2"
            onClick={() => setIsModalOpen(true)}
          >
            Expand
          </button>
          <button
            className="text-red-500 ml-4"
            onClick={() => setPreviewData(null)}
          >
            Close
          </button>
        </div>
      )}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <div className="p-6">
          <h2 className="text-xl font-bold">Row Details</h2>
          {previewData && (
            <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(previewData, null, 2)}</pre>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default FilterableTable;
