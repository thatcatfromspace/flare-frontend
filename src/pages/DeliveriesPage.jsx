import React, { useState } from "react";
import { deliveries } from "../data/deliveries";
import DeliveryTable from "../components/DeliveryTable";
import DeliveryDetailModal from "../components/DeliveryDetailModal";

export default function DeliveriesPage() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="relative">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
        Delivery Overview
      </h1>
      <DeliveryTable deliveries={deliveries} onRowClick={setSelected} />
      {selected && (
        <DeliveryDetailModal
          delivery={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
