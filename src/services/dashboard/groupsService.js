const API_URL = "https://backend-node-9ax3.onrender.com/api/grupo";

export const createGroup = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/crear-grupo`, {
      method: "POST",
      body: formData,
      cache: "no-store",
    });

    const contentType = response.headers.get("Content-Type");
    const isJSON = contentType?.includes("application/json");

    if (!response.ok) {
      const errorText = isJSON
        ? (await response.json()).error || "Error al crear el grupo."
        : await response.text();

      throw new Error(errorText || "Error desconocido al crear el grupo.");
    }

    return await response.json();
  } catch (err) {
    console.error("Error al crear grupo:", err.message);
    throw err;
  }
};

export const editGroup = async (grupoId, formData) => {
  try {
    const response = await fetch(`${API_URL}/edit-grupo/${grupoId}`, {
      method: "PUT",
      body: formData,
      cache: "no-store",
    });

    const contentType = response.headers.get("Content-Type");
    const isJSON = contentType?.includes("application/json");

    if (!response.ok) {
      const errorText = isJSON
        ? (await response.json()).error || "Error al editar el grupo."
        : await response.text();

      throw new Error(errorText || "Error desconocido al editar el grupo.");
    }

    return await response.json();
  } catch (err) {
    console.error("Error al editar grupo:", err.message);
    throw err;
  }
};

export const getGroupsByUser = async (usuarioId) => {
  try {
    const response = await fetch(`${API_URL}/obtener-grupo/${usuarioId}`, {
      method: "GET",
      cache: "no-store",
    });

    const result = await response.json();

    if (response.ok && result.status === "success") {
      return result.grupos;
    }

    console.error("Error en respuesta:", result);
    return [];
  } catch (err) {
    console.error("Error al obtener grupos por usuario:", err.message);
    return [];
  }
};

export const deleteGroup = async (grupoId) => {
  try {
    const response = await fetch(`${API_URL}/eliminar-grupo/${grupoId}`, {
      method: "DELETE",
      cache: "no-store",
    });

    const contentType = response.headers.get("Content-Type");
    const isJSON = contentType?.includes("application/json");

    if (!response.ok) {
      const errorText = isJSON
        ? (await response.json()).error || "Error al eliminar el grupo."
        : await response.text();

      throw new Error(errorText || "Error desconocido al eliminar el grupo.");
    }

    return await response.json();
  } catch (err) {
    console.error("Error al eliminar grupo:", err.message);
    throw err;
  }
};
